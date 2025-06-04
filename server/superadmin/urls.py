from django.urls import path
from .views import *
app_name = 'superadmin'

urlpatterns = [
    path('login', SuperAdminLoginView.as_view(), name='login'),
    path('logout', SuperAdminLogoutView.as_view(), name='logout'),
    path('', Dashboard.as_view(), name='dashboard'),
    path('manage-topbar', ManageTopBar.as_view(), name='manage_topbar'),
    path('add-topbar', AddTopBarView.as_view(), name='add_topbar'),
    path('edit-topbar/<str:enc_id>', EditTopBar.as_view(), name='edit_topbar'),
    path('delete-topbar/<str:enc_id>',
         DeleteTopbarView.as_view(), name='delete_topbar'),

    path('manage-results', ManageResults.as_view(), name='manage_results'),
    path('add-results', AddResultsView.as_view(), name='add_results'),
    path('edit-results/<str:enc_id>',
         EditResultsView.as_view(), name='edit_results'),
    path('delete-results/<str:enc_id>',
         DeleteResultsView.as_view(), name='delete_results'),

    path('manage-admit_cards', ManageAdmitCards.as_view(),
         name='manage_admit_cards'),
    path('add-admit_cards', AddAdmitCardsView.as_view(), name='add_admit_cards'),
    path('edit-admit_cards/<str:enc_id>',
         EditAdmitCardsView.as_view(), name='edit_admit_cards'),
    path('delete-admit_cards/<str:enc_id>',
         DeleteAdmitCardsView.as_view(), name='delete_admit_cards'),

    path('manage-latest_jobs', ManageLatestJobs.as_view(),
         name='manage_latest_jobs'),
    path('add-latest_jobs', AddLatestJobsView.as_view(), name='add_latest_jobs'),
    path('edit-latest_jobs/<str:enc_id>',
         EditLatestJobsView.as_view(), name='edit_latest_jobs'),
    path('delete-latest_jobs/<str:enc_id>',
         DeleteLatestJobsView.as_view(), name='delete_latest_jobs'),

    path('manage-answer_keys', ManageAnswerKeys.as_view(),
         name='manage_answer_keys'),
    path('add-answer_keys', AddAnswerKeysView.as_view(), name='add_answer_keys'),
    path('edit-answer_keys/<str:enc_id>',
         EditAnswerKeysView.as_view(), name='edit_answer_keys'),
    path('delete-answer_keys/<str:enc_id>',
         DeleteAnswerKeysView.as_view(), name='delete_answer_keys'),

    path('manage-syllabus', ManageSyllabus.as_view(), name='manage_syllabus'),
    path('add-syllabus', AddSyllabusView.as_view(), name='add_syllabus'),
    path('edit-syllabus/<str:enc_id>',
         EditSyllabusView.as_view(), name='edit_syllabus'),
    path('delete-syllabus/<str:enc_id>',
         DeleteSyllabusView.as_view(), name='delete_syllabus'),

    path('manage-admission', ManageAdmission.as_view(), name='manage_admission'),
    path('add-admission', AddAdmissionView.as_view(), name='add_admission'),
    path('edit-admission/<str:enc_id>',
         EditAdmissionView.as_view(), name='edit_admission'),
    path('delete-admission/<str:enc_id>',
         DeleteAdmissionView.as_view(), name='delete_admission'),

    path('manage-certificate_verification', ManageCertificateVerification.as_view(),
         name='manage_certificate_verification'),
    path('add-certificate_verification', AddCertificateVerificationView.as_view(),
         name='add_certificate_verification'),
    path('edit-certificate_verification/<str:enc_id>',
         EditCertificateVerificationView.as_view(), name='edit_certificate_verification'),
    path('delete-certificate_verification/<str:enc_id>',
         DeleteCertificateVerificationView.as_view(), name='delete_certificate_verification'),

    path('manage-importants', ManageImportants.as_view(), name='manage_importants'),
    path('add-importants', AddImportantsView.as_view(), name='add_importants'),
    path('edit-importants/<str:enc_id>',
         EditImportantsView.as_view(), name='edit_importants'),
    path('delete-importants/<str:enc_id>',
         DeleteImportantsView.as_view(), name='delete_importants'),

    path('api/admin-panel/', AdminPanelView.as_view(), name='admin_panel'),
]
