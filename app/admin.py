from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User
from .models import Image

class ImageAdmin(admin.ModelAdmin):
    list_display = ['user', 'image']

admin.site.register(Image, ImageAdmin)