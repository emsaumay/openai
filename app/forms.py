from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User
from .models import Image

class SignUpForm(UserCreationForm):
    class Meta:
        model = User
        fields = ('username', 'password1', 'password2')

class LoginForm(AuthenticationForm):
    username = forms.CharField(label='Username', max_length=64)
    password = forms.CharField(label='Password', widget=forms.PasswordInput)

class ImageUploadForm(forms.ModelForm):
    class Meta:
        model = Image
        fields = ('image',)