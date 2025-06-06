from django.contrib import admin
from .models import User
# Register your models here.
admin.site.site_header = "Sarkari Naukri Admin"
admin.site.site_title = "Sarkari Naukri Admin Portal"
admin.site.index_title = "Welcome to Sarkari Naukri Admin Portal"
admin.site.site_url = "https://sarkarinaukri.com"
admin.site.register(User)
