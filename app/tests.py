from django.test import TestCase
from django.urls import reverse
from django.contrib.auth.models import User
from app.forms import UserCreationForm, ImageUploadForm
from app.models import Image

class UserAccountTests(TestCase):

    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='12345')

    def test_login_view(self):
        response = self.client.post(reverse('login'), {'username': 'testuser', 'password': '12345'})
        self.assertEqual(response.status_code, 302)
        self.assertTrue(response.url.startswith(reverse('home')))

    def test_signup_view(self):
        response = self.client.post(reverse('signup'), {
            'username': 'newuser',
            'password1': 'newpassword123',
            'password2': 'newpassword123'
        })
        self.assertEqual(response.status_code, 302)
        self.assertTrue(User.objects.filter(username='newuser').exists())

    def test_upload_image_view(self):
        self.client.login(username='testuser', password='12345')
        with open('media/images/test_image.jpg', 'rb') as image:
            response = self.client.post(reverse('upload'), {'image': image}, follow=True)
        self.assertEqual(response.status_code, 200)
        self.assertTrue(Image.objects.filter(user=self.user).exists())

    def test_home_view(self):
        self.client.login(username='testuser', password='12345')
        response = self.client.get(reverse('home'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'home.html')

    def test_logout_view(self):
        self.client.login(username='testuser', password='12345')
        response = self.client.get(reverse('logout'))
        self.assertEqual(response.status_code, 302)
        self.assertFalse('_auth_user_id' in self.client.session)