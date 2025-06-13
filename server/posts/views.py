from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Q
from .serializers import *
from .models import *
# Create your views here.


class TopBarView(APIView):
    def get(self, request):
        items = TopBar.objects.all().order_by('-id')[8]
        serializer = TopBarSerializer(items, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class DesktopView(APIView):
    def get_alerts(self):
        items = Posts.objects.all().order_by('-id')[:10]
        serializer = PostsSerializer(items, many=True)
        return serializer.data

    def get_latest_jobs(self):
        query = Q(category='latest_jobs')
        items = Posts.objects.filter(query).order_by('-id')[:10]
        serializer = PostsSerializer(items, many=True)
        return serializer.data

    def get_results(self):
        query = Q(category='results')
        items = Posts.objects.filter(query).order_by('-id')[:10]
        serializer = PostsSerializer(items, many=True)
        return serializer.data

    def get_admit_cards(self):
        query = Q(category='admit_cards')
        items = Posts.objects.filter(query).order_by('-id')[:10]
        serializer = PostsSerializer(items, many=True)
        return serializer.data

    def get_answer_keys(self):
        query = Q(category='answer_keys')
        items = Posts.objects.filter(query).order_by('-id')[:10]
        serializer = PostsSerializer(items, many=True)
        return serializer.data

    def get_admission(self):
        query = Q(category='admission')
        items = Posts.objects.filter(query).order_by('-id')[:10]
        serializer = PostsSerializer(items, many=True)
        return serializer.data

    def get_certificate_verification(self):
        query = Q(category='certificate_verification')
        items = Posts.objects.filter(query).order_by('-id')[:10]
        serializer = PostsSerializer(items, many=True)
        return serializer.data

    def get_syllabus(self):
        query = Q(category='importants')
        items = Posts.objects.filter(query).order_by('-id')[:10]
        serializer = PostsSerializer(items, many=True)
        return serializer.data

    def get_importants(self):
        query = Q(category='importants')
        items = Posts.objects.filter(query).order_by('-id')[:10]
        serializer = PostsSerializer(items, many=True)
        return serializer.data

    def get(self, request):
        context = {
            'alerts': self.get_alerts(),
            'latest_jobs': self.get_latest_jobs(),
            'results': self.get_results(),
            'admit_cards': self.get_admit_cards(),
            'answer_keys': self.get_answer_keys(),
            'syllabus': self.get_syllabus(),
            'admission': self.get_admission(),
            'certificate_verification': self.get_certificate_verification(),
            'importants': self.get_importants(),
        }
        return Response(context, status=status.HTTP_200_OK)


class LatestJobsView(APIView):
    def get(self, request):
        query = Q(category='latest_jobs')
        items = Posts.objects.filter(query).order_by('-id')[10]
        serializer = PostsSerializer(items, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        query = Q(category='latest_jobs')
        items = Posts.objects.filter(query).order_by('-id')[10]
        serializer = PostsSerializer(items, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class ResultsView(APIView):
    def get(self, request):
        query = Q(category='results')
        items = Posts.objects.filter(query).order_by('-id')[10]
        serializer = PostsSerializer(items, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        query = Q(category='results')
        items = Posts.objects.filter(query).order_by('-id')[10]
        serializer = PostsSerializer(items, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class AdmitCardsView(APIView):
    def get(self, request):
        query = Q(category='admit_cards')
        items = Posts.objects.filter(query).order_by('-id')[10]
        serializer = PostsSerializer(items, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        query = Q(category='admit_cards')
        items = Posts.objects.filter(query).order_by('-id')[10]
        serializer = PostsSerializer(items, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class AnswerKeysView(APIView):
    def get(self, request):
        query = Q(category='answer_keys')
        items = Posts.objects.filter(query).order_by('-id')[10]
        serializer = PostsSerializer(items, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        query = Q(category='answer_keys')
        items = Posts.objects.filter(query).order_by('-id')[10]
        serializer = PostsSerializer(items, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class SyllabusView(APIView):
    def get(self, request):
        query = Q(category='syllabus')
        items = Posts.objects.filter(query).order_by('-id')[10]
        serializer = PostsSerializer(items, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        query = Q(category='syllabus')
        items = Posts.objects.filter(query).order_by('-id')[10]
        serializer = PostsSerializer(items, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class AdmissionView(APIView):
    def get(self, request):
        query = Q(category='admission')
        items = Posts.objects.filter(query).order_by('-id')[10]
        serializer = PostsSerializer(items, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        query = Q(category='admission')
        items = Posts.objects.filter(query).order_by('-id')[10]
        serializer = PostsSerializer(items, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class CertificateVerificationView(APIView):
    def get(self, request):
        query = Q(category='certificate_verification')
        items = Posts.objects.filter(query).order_by('-id')[10]
        serializer = PostsSerializer(items, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        query = Q(category='certificate_verification')
        items = Posts.objects.filter(query).order_by('-id')[10]
        serializer = PostsSerializer(items, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class ImportantsView(APIView):
    def get(self, request):
        query = Q(category='importants')
        items = Posts.objects.filter(query).order_by('-id')[10]
        serializer = PostsSerializer(items, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        query = Q(category='importants')
        items = Posts.objects.filter(query).order_by('-id')[10]
        serializer = PostsSerializer(items, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
