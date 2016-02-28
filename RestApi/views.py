from models import Judge,Comissioner,Act,Court,Debter
from serializers import JudgeSerializer,DebterSerializer,ComissionerSerializer,CourtSerializer,ActSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics


class JudgeList(APIView):
    """
    List all snippets, or create a new snippet.
    """
    def get(self, request, format=None):
        js = Judge.objects.all()
        serializer = JudgeSerializer(js, many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = JudgeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class JudgeSingle(APIView):
    """
    Retrieve, update or delete a snippet instance.
    """
    def get_object(self, id):
        try:
            return Judge.objects.get(id=id)
        except Judge.DoesNotExist:
            raise Http404

    def get(self, request, id, format=None):
        judge = self.get_object(id)
        serializer = JudgeSerializer(judge)
        return Response(serializer.data)

    def put(self, request, id, format=None):
        judge = self.get_object(id)
        serializer = JudgeSerializer(judge, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id, format=None):
        print id
        judge = self.get_object(id)
        judge.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class DebterList(generics.ListCreateAPIView):
    queryset = Debter.objects.all()
    serializer_class = DebterSerializer
    lookup_field = 'id'
class DebterSingle(generics.RetrieveUpdateDestroyAPIView):
    queryset = Debter.objects.all()
    serializer_class = DebterSerializer
    lookup_field = 'id'

class CourtList(generics.ListCreateAPIView):
    queryset = Court.objects.all()
    serializer_class = CourtSerializer
    lookup_field = 'id'
class CourtSingle(generics.RetrieveUpdateDestroyAPIView):
    queryset = Court.objects.all()
    serializer_class = CourtSerializer
    lookup_field = 'id'

class ComissionerList(generics.ListCreateAPIView):
    queryset = Comissioner.objects.all()
    serializer_class = ComissionerSerializer
    lookup_field = 'id'
class ComissionerSingle(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comissioner.objects.all()
    serializer_class = ComissionerSerializer
    lookup_field = 'id'


#Shoud be better solution
class ActList(generics.ListCreateAPIView):
    queryset = Act.objects.all()
    serializer_class = ActSerializer
    lookup_field = 'id'
class ActSingle(generics.RetrieveUpdateDestroyAPIView):
    queryset = Act.objects.all()
    serializer_class = ActSerializer
    lookup_field = 'id'