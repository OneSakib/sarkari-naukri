from django.urls import path
from .views import *

app_name = 'posts'

urlpatterns = [
    path('desktop/', DesktopView.as_view(), name='desktop'),
    path('top-bar/', TopBarView.as_view(), name='top_bar'),
    path('latest-jobs/', LatestJobsView.as_view(), name='latest_jobs'),
    path('results/', ResultsView.as_view(), name='results'),
    path('admit-cards/', AdmitCardsView.as_view(), name='admit_cards'),
    path('answer-keys/', AnswerKeysView.as_view(), name='answer_keys'),
    path('syllabus/', SyllabusView.as_view(), name='syllabus'),
    path('admission/', AdmissionView.as_view(), name='admission'),
    path('certificate-verification/',
         CertificateVerificationView.as_view(), name='certificate_verification'),
    path('importants/', ImportantsView.as_view(), name='importants'),
]
