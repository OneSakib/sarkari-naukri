from django.contrib import admin
from .models import User
# Register your models here.
admin.site.site_header = "Sarkari Naukari Admin"
admin.site.site_title = "Sarkari Naukari Admin Portal"
admin.site.index_title = "Welcome to Sarkari Naukari Admin Portal"
admin.site.site_url = "https://sarkarinaukari.com"
admin.site.register(User)
