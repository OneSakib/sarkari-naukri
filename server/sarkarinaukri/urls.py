from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('superadmin.urls', namespace='superadmin')),
    path('admin/', admin.site.urls),
    path('api/account/', include('accounts.urls', namespace='accounts')),
    path('api/posts/', include('posts.urls', namespace='posts')),
]
