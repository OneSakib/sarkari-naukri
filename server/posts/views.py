from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import *
# Create your views here.


class TopBarView(APIView):
    def get(self, request):
        items = TopBarView.objects.all()
        serializer = TopBarSerializer(items, many=True)
        return Response(serializer.data)
