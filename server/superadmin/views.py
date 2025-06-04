from django.shortcuts import redirect
from django.urls import reverse_lazy
from django.views import View
from django.shortcuts import render
from django.contrib.auth import logout
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.authentication import SessionAuthentication
from django.contrib.auth.views import LoginView
from accounts.models import User
from django.contrib import messages
from django.db.models import Q
from django.utils.decorators import method_decorator
from helpers.custom_decorators import superuser_required
from posts.models import *
from .serializers import *
from .models import *
from .forms import *


class SuperAdminLoginView(LoginView):
    template_name = 'superadmin/login.html'

    def dispatch(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            # Change this to your target URL name
            return redirect('superadmin:dashboard')
        return super().dispatch(request, *args, **kwargs)


@method_decorator(superuser_required, name='dispatch')
class SuperAdminLogoutView(View):
    def get(self, request):
        logout(request)
        messages.success(request, 'You have been logged out successfully.')
        return redirect(reverse_lazy('superadmin:login'))


@method_decorator(superuser_required, name='dispatch')
class Dashboard(View):
    def get(self, request):
        return render(request, 'superadmin/dashboard.html')


@method_decorator(superuser_required, name='dispatch')
class ManageTopBar(View):
    def get(self, request):
        instance = TopBar.objects.all()
        context = {
            'page_obj': instance
        }
        return render(request, 'superadmin/manage_topbar.html', context)


@method_decorator(superuser_required, name='dispatch')
class AddTopBarView(View):
    def get(self, request):
        form = TopBarForm()
        context = {
            'form': form
        }
        return render(request, 'superadmin/add_topbar.html', context)

    def post(self, request):
        form = TopBarForm(data=request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'TopBar Added successful!')
            return redirect(reverse_lazy('superadmin:manage_topbar'))
        context = {
            'form': form
        }
        return render(request, 'superadmin/add_topbar.html', context)


@method_decorator(superuser_required, name='dispatch')
class EditTopBar(View):
    def get(self, request, enc_id):
        instance = TopBar.objects.get(enc_id=enc_id)
        form = TopBarForm(instance=instance)
        context = {
            'form': form
        }
        return render(request, 'superadmin/edit_topbar.html', context)

    def post(self, request, enc_id):
        instance = TopBar.objects.get(enc_id=enc_id)
        form = TopBarForm(data=request.POST, instance=instance)
        if form.is_valid():
            form.save()
            return redirect(reverse_lazy('superadmin:manage_topbar'))
        context = {
            'form': form
        }
        return render(request, 'superadmin/edit_topbar.html', context)


@method_decorator(superuser_required, name='dispatch')
class DeleteTopbarView(View):
    def get(self, request, enc_id):
        TopBar.objects.filter(enc_id=enc_id).delete()
        messages.success(request, 'TopBar Deleted successful!')
        return redirect(reverse_lazy('superadmin:manage_topbar'))

# Results


@method_decorator(superuser_required, name='dispatch')
class ManageResults(View):
    def get(self, request):
        query = Q(category='results')
        page_obj = Posts.objects.filter(query)
        context = {
            'page_obj': page_obj
        }
        return render(request, 'superadmin/manage_results.html', context)


@method_decorator(superuser_required, name='dispatch')
class AddResultsView(View):
    def get(self, request):
        form = PostsForm()
        context = {
            'form': form
        }
        return render(request, 'superadmin/add_results.html', context)

    def post(self, request):
        form = PostsForm(data=request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Results Added successful!')
            return redirect(reverse_lazy('superadmin:manage_results'))
        context = {
            'form': form
        }
        return render(request, 'superadmin/add_results.html', context)


@method_decorator(superuser_required, name='dispatch')
class EditResultsView(View):
    def get(self, request, enc_id):
        instance = Posts.objects.get(enc_id=enc_id)
        form = PostsForm(instance=instance)
        context = {
            'form': form
        }
        return render(request, 'superadmin/edit_results.html', context)

    def post(self, request, enc_id):
        instance = Posts.objects.get(enc_id=enc_id)
        form = PostsForm(instance=instance, data=request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Results Updated successful!')
            return redirect(reverse_lazy('superadmin:manage_results'))
        context = {
            'form': form
        }
        return render(request, 'superadmin/edit_results.html', context)


@method_decorator(superuser_required, name='dispatch')
class DeleteResultsView(View):
    def get(self, request, enc_id):
        Posts.objects.filter(enc_id=enc_id).delete()
        messages.success(request, 'Results Deleted successful!')
        return redirect(reverse_lazy('superadmin:manage_results'))

# Admit Cards


@method_decorator(superuser_required, name='dispatch')
class ManageAdmitCards(View):
    def get(self, request):
        query = Q(category='admit_cards')
        page_obj = Posts.objects.filter(query)
        context = {
            'page_obj': page_obj
        }
        return render(request, 'superadmin/manage_admit_cards.html', context)


@method_decorator(superuser_required, name='dispatch')
class AddAdmitCardsView(View):
    def get(self, request):
        form = PostsForm()
        context = {
            'form': form
        }
        return render(request, 'superadmin/add_admit_cards.html', context)

    def post(self, request):
        form = PostsForm(data=request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Admit Cards Added successful!')
            return redirect(reverse_lazy('superadmin:manage_admit_cards'))
        context = {
            'form': form
        }
        return render(request, 'superadmin/add_admit_cards.html', context)


@method_decorator(superuser_required, name='dispatch')
class EditAdmitCardsView(View):
    def get(self, request, enc_id):
        instance = Posts.objects.get(enc_id=enc_id)
        form = PostsForm(instance=instance)
        context = {
            'form': form
        }
        return render(request, 'superadmin/edit_admit_cards.html', context)

    def post(self, request, enc_id):
        instance = Posts.objects.get(enc_id=enc_id)
        form = PostsForm(instance=instance, data=request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Admit Cards Updated successful!')
            return redirect(reverse_lazy('superadmin:manage_admit_cards'))
        context = {
            'form': form
        }
        return render(request, 'superadmin/edit_admit_cards.html', context)


@method_decorator(superuser_required, name='dispatch')
class DeleteAdmitCardsView(View):
    def get(self, request, enc_id):
        Posts.objects.filter(enc_id=enc_id).delete()
        messages.success(request, 'Admit Cards Deleted successful!')
        return redirect(reverse_lazy('superadmin:manage_admit_cards'))
# Latest Jobs


@method_decorator(superuser_required, name='dispatch')
class ManageLatestJobs(View):
    def get(self, request):
        query = Q(category='latest_jobs')
        page_obj = Posts.objects.filter(query)
        context = {
            'page_obj': page_obj
        }
        return render(request, 'superadmin/manage_latest_jobs.html', context)


@method_decorator(superuser_required, name='dispatch')
class AddLatestJobsView(View):
    def get(self, request):
        form = PostsForm()
        context = {
            'form': form
        }
        return render(request, 'superadmin/add_latest_jobs.html', context)

    def post(self, request):
        form = PostsForm(data=request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Latest Jobs Added successful!')
            return redirect(reverse_lazy('superadmin:manage_latest_jobs'))
        context = {
            'form': form
        }
        return render(request, 'superadmin/add_latest_jobs.html', context)


@method_decorator(superuser_required, name='dispatch')
class EditLatestJobsView(View):
    def get(self, request, enc_id):
        instance = Posts.objects.get(enc_id=enc_id)
        form = PostsForm(instance=instance)
        context = {
            'form': form
        }
        return render(request, 'superadmin/edit_latest_jobs.html', context)

    def post(self, request, enc_id):
        instance = Posts.objects.get(enc_id=enc_id)
        form = PostsForm(instance=instance, data=request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Latest Jobs Updated successful!')
            return redirect(reverse_lazy('superadmin:manage_latest_jobs'))
        context = {
            'form': form
        }
        return render(request, 'superadmin/edit_latest_jobs.html', context)


@method_decorator(superuser_required, name='dispatch')
class DeleteLatestJobsView(View):
    def get(self, request, enc_id):
        Posts.objects.filter(enc_id=enc_id).delete()
        messages.success(request, 'Latest Jobs Deleted successful!')
        return redirect(reverse_lazy('superadmin:manage_latest_jobs'))


# Answer Keys


@method_decorator(superuser_required, name='dispatch')
class ManageAnswerKeys(View):
    def get(self, request):
        query = Q(category='answer_keys')
        page_obj = Posts.objects.filter(query)
        context = {
            'page_obj': page_obj
        }
        return render(request, 'superadmin/manage_answer_keys.html', context)


@method_decorator(superuser_required, name='dispatch')
class AddAnswerKeysView(View):
    def get(self, request):
        form = PostsForm()
        context = {
            'form': form
        }
        return render(request, 'superadmin/add_answer_keys.html', context)

    def post(self, request):
        form = PostsForm(data=request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Answer Keys Added successful!')
            return redirect(reverse_lazy('superadmin:manage_answer_keys'))
        context = {
            'form': form
        }
        return render(request, 'superadmin/add_answer_keys.html', context)


@method_decorator(superuser_required, name='dispatch')
class EditAnswerKeysView(View):
    def get(self, request, enc_id):
        instance = Posts.objects.get(enc_id=enc_id)
        form = PostsForm(instance=instance)
        context = {
            'form': form
        }
        return render(request, 'superadmin/edit_answer_keys.html', context)

    def post(self, request, enc_id):
        instance = Posts.objects.get(enc_id=enc_id)
        form = PostsForm(instance=instance, data=request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Answer Keys Updated successful!')
            return redirect(reverse_lazy('superadmin:manage_answer_keys'))
        context = {
            'form': form
        }
        return render(request, 'superadmin/edit_answer_keys.html', context)


@method_decorator(superuser_required, name='dispatch')
class DeleteAnswerKeysView(View):
    def get(self, request, enc_id):
        Posts.objects.filter(enc_id=enc_id).delete()
        messages.success(request, 'Answer Keys Deleted successful!')
        return redirect(reverse_lazy('superadmin:manage_answer_keys'))

# Syllabus


@method_decorator(superuser_required, name='dispatch')
class ManageSyllabus(View):
    def get(self, request):
        query = Q(category='syllabus')
        page_obj = Posts.objects.filter(query)
        context = {
            'page_obj': page_obj
        }
        return render(request, 'superadmin/manage_syllabus.html', context)


@method_decorator(superuser_required, name='dispatch')
class AddSyllabusView(View):
    def get(self, request):
        form = PostsForm()
        context = {
            'form': form
        }
        return render(request, 'superadmin/add_syllabus.html', context)

    def post(self, request):
        form = PostsForm(data=request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Syllabus Added successful!')
            return redirect(reverse_lazy('superadmin:manage_syllabus'))
        context = {
            'form': form
        }
        return render(request, 'superadmin/add_syllabus.html', context)


@method_decorator(superuser_required, name='dispatch')
class EditSyllabusView(View):
    def get(self, request, enc_id):
        instance = Posts.objects.get(enc_id=enc_id)
        form = PostsForm(instance=instance)
        context = {
            'form': form
        }
        return render(request, 'superadmin/edit_syllabus.html', context)

    def post(self, request, enc_id):
        instance = Posts.objects.get(enc_id=enc_id)
        form = PostsForm(instance=instance, data=request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Syllabus Updated successful!')
            return redirect(reverse_lazy('superadmin:manage_syllabus'))
        context = {
            'form': form
        }
        return render(request, 'superadmin/edit_syllabus.html', context)


@method_decorator(superuser_required, name='dispatch')
class DeleteSyllabusView(View):
    def get(self, request, enc_id):
        Posts.objects.filter(enc_id=enc_id).delete()
        messages.success(request, 'Syllabus Deleted successful!')
        return redirect(reverse_lazy('superadmin:manage_syllabus'))

# Admission


@method_decorator(superuser_required, name='dispatch')
class ManageAdmission(View):
    def get(self, request):
        query = Q(category='admission')
        page_obj = Posts.objects.filter(query)
        context = {
            'page_obj': page_obj
        }
        return render(request, 'superadmin/manage_admission.html', context)


@method_decorator(superuser_required, name='dispatch')
class AddAdmissionView(View):
    def get(self, request):
        form = PostsForm()
        context = {
            'form': form
        }
        return render(request, 'superadmin/add_admission.html', context)

    def post(self, request):
        form = PostsForm(data=request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Admission Added successful!')
            return redirect(reverse_lazy('superadmin:manage_admission'))
        context = {
            'form': form
        }
        return render(request, 'superadmin/add_admission.html', context)


@method_decorator(superuser_required, name='dispatch')
class EditAdmissionView(View):
    def get(self, request, enc_id):
        instance = Posts.objects.get(enc_id=enc_id)
        form = PostsForm(instance=instance)
        context = {
            'form': form
        }
        return render(request, 'superadmin/edit_admission.html', context)

    def post(self, request, enc_id):
        instance = Posts.objects.get(enc_id=enc_id)
        form = PostsForm(instance=instance, data=request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Admission Updated successful!')
            return redirect(reverse_lazy('superadmin:manage_admission'))
        context = {
            'form': form
        }
        return render(request, 'superadmin/edit_admission.html', context)


@method_decorator(superuser_required, name='dispatch')
class DeleteAdmissionView(View):
    def get(self, request, enc_id):
        Posts.objects.filter(enc_id=enc_id).delete()
        messages.success(request, 'Admission Deleted successful!')
        return redirect(reverse_lazy('superadmin:manage_admission'))
# Admission


@method_decorator(superuser_required, name='dispatch')
class ManageCertificateVerification(View):
    def get(self, request):
        query = Q(category='certificate_verification')
        page_obj = Posts.objects.filter(query)
        context = {
            'page_obj': page_obj
        }
        return render(request, 'superadmin/manage_certificate_verification.html', context)


@method_decorator(superuser_required, name='dispatch')
class AddCertificateVerificationView(View):
    def get(self, request):
        form = PostsForm()
        context = {
            'form': form
        }
        return render(request, 'superadmin/add_certificate_verification.html', context)

    def post(self, request):
        form = PostsForm(data=request.POST)
        if form.is_valid():
            form.save()
            messages.success(
                request, 'Certificate Verification Added successful!')
            return redirect(reverse_lazy('superadmin:manage_certificate_verification'))
        context = {
            'form': form
        }
        return render(request, 'superadmin/add_certificate_verification.html', context)


@method_decorator(superuser_required, name='dispatch')
class EditCertificateVerificationView(View):
    def get(self, request, enc_id):
        instance = Posts.objects.get(enc_id=enc_id)
        form = PostsForm(instance=instance)
        context = {
            'form': form
        }
        return render(request, 'superadmin/edit_certificate_verification.html', context)

    def post(self, request, enc_id):
        instance = Posts.objects.get(enc_id=enc_id)
        form = PostsForm(instance=instance, data=request.POST)
        if form.is_valid():
            form.save()
            messages.success(
                request, 'Certificate Verification Updated successful!')
            return redirect(reverse_lazy('superadmin:manage_certificate_verification'))
        context = {
            'form': form
        }
        return render(request, 'superadmin/edit_certificate_verification.html', context)


@method_decorator(superuser_required, name='dispatch')
class DeleteCertificateVerificationView(View):
    def get(self, request, enc_id):
        Posts.objects.filter(enc_id=enc_id).delete()
        messages.success(
            request, 'Certificate Verification Deleted successful!')
        return redirect(reverse_lazy('superadmin:manage_certificate_verification'))
# Importants


@method_decorator(superuser_required, name='dispatch')
class ManageImportants(View):
    def get(self, request):
        query = Q(category='importants')
        page_obj = Posts.objects.filter(query)
        context = {
            'page_obj': page_obj
        }
        return render(request, 'superadmin/manage_importants.html', context)


@method_decorator(superuser_required, name='dispatch')
class AddImportantsView(View):
    def get(self, request):
        form = PostsForm()
        context = {
            'form': form
        }
        return render(request, 'superadmin/add_importants.html', context)

    def post(self, request):
        form = PostsForm(data=request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Importants Added successful!')
            return redirect(reverse_lazy('superadmin:manage_importants'))
        context = {
            'form': form
        }
        return render(request, 'superadmin/add_importants.html', context)


@method_decorator(superuser_required, name='dispatch')
class EditImportantsView(View):
    def get(self, request, enc_id):
        instance = Posts.objects.get(enc_id=enc_id)
        form = PostsForm(instance=instance)
        context = {
            'form': form
        }
        return render(request, 'superadmin/edit_importants.html', context)

    def post(self, request, enc_id):
        instance = Posts.objects.get(enc_id=enc_id)
        form = PostsForm(instance=instance, data=request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Importants Updated successful!')
            return redirect(reverse_lazy('superadmin:manage_importants'))
        context = {
            'form': form
        }
        return render(request, 'superadmin/edit_importants.html', context)


@method_decorator(superuser_required, name='dispatch')
class DeleteImportantsView(View):
    def get(self, request, enc_id):
        Posts.objects.filter(enc_id=enc_id).delete()
        messages.success(request, 'Importants Deleted successful!')
        return redirect(reverse_lazy('superadmin:manage_importants'))


# API


class AdminPanelView(APIView):
    authentication_classes = [JWTAuthentication, SessionAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        admin_panel = AdminPanel.objects.first()
        serializer = AdminPanelSerializer(admin_panel)
        return Response(serializer.data)
