from django.urls import path
from .views import *
app_name = 'superadmin'

urlpatterns = [
    path('', Dashboard.as_view(), name='dashboard'),
    path('manage-topbar', ManageTopBar.as_view(), name='manage_topbar'),
    path('edit-topbar', EditTopBar.as_view(), name='edit_topbar'),
]
