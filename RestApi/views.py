import datetime

from django.shortcuts import redirect

from models import Judge,Comissioner,Act,Court,Debter
from serializers import JudgeSerializer,DebterSerializer,ComissionerSerializer,CourtSerializer,ActSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from random import randint


class JudgeList(APIView):
    """
    List all snippets, or create a new snippet.
    """
    def get(self, request, format=None):
        js = Judge.objects.all()
        serializer = JudgeSerializer(js, many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)

    def post(self, request, format=None):
        if(exists_id(request.data,Judge)):
            return Response(status=status.HTTP_400_BAD_REQUEST)
        serializer = JudgeSerializer(data=request.data)
        print request.data
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
            print serializer.validated_data
            serializer.save()
            return Response(serializer.data,status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id, format=None):
        print id
        judge = self.get_object(id)
        judge.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class DebterList(APIView):
    def get(self, request, format=None):
        js = Debter.objects.all()
        serializer = DebterSerializer(js, many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)

    def post(self, request, format=None):
        if(exists_id(request.data,Debter)):
            return Response(status=status.HTTP_400_BAD_REQUEST)
        serializer = DebterSerializer(data=request.data)
        print request.data
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class DebterSingle(generics.RetrieveUpdateDestroyAPIView):
    queryset = Debter.objects.all()
    serializer_class = DebterSerializer
    lookup_field = 'id'

class CourtList(APIView):
    def get(self, request, format=None):
        js = Court.objects.all()
        serializer = CourtSerializer(js, many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)

    def post(self, request, format=None):
        if(exists_id(request.data,Court)):
            return Response(status=status.HTTP_400_BAD_REQUEST)
        serializer = CourtSerializer(data=request.data)
        print request.data
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class CourtSingle(generics.RetrieveUpdateDestroyAPIView):
    queryset = Court.objects.all()
    serializer_class = CourtSerializer
    lookup_field = 'id'

class ComissionerList(APIView):
    def get(self, request, format=None):
        js = Comissioner.objects.all()
        serializer = ComissionerSerializer(js, many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)

    def post(self, request, format=None):
        if(exists_id(request.data,Comissioner)):
            return Response(status=status.HTTP_400_BAD_REQUEST)
        serializer = ComissionerSerializer(data=request.data)
        print request.data
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class ComissionerSingle(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comissioner.objects.all()
    serializer_class = ComissionerSerializer
    lookup_field = 'id'


#Shoud be better solution
class ActList(APIView):
    def get(self, request, format=None):
        js = Act.objects.all()
        serializer = ActSerializer(js, many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)

    def post(self, request, format=None):
        if(exists_id(request.data,Act)):
            return Response(status=status.HTTP_400_BAD_REQUEST)
        serializer = ActSerializer(data=request.data)
        print request.data
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class ActSingle(generics.RetrieveUpdateDestroyAPIView):
    queryset = Act.objects.all()
    serializer_class = ActSerializer
    lookup_field = 'id'


def generate_acts(request):
    Act.objects.all().delete()
    Judge.objects.all().delete()
    Comissioner.objects.all().delete()
    Debter.objects.all().delete()
    Court.objects.all().delete()

    word_base = [" Jack "," Ron "," Tonni "," Moker "," genster "," Dobrei"," asistant"," Gogo"," Allah"]
    surname_base = ["Peterson", "Ronny","Wilson","Test1","Rew","Gostly","Amigo"]
    word_len =len(word_base)-1
    surname_len = len(surname_base)-1
    for i in xrange(10):
        judge = Judge(name = word_base[randint(0,word_len)],
                      surname = surname_base[randint(0,surname_len)],
                      middlename = word_base[randint(0,word_len)])
        judge.save()
        debter = Debter(type = randint(0,1),
                        name = word_base[randint(0,word_len)],
                        number = word_base[randint(0,word_len)],
                        kved = "ONE",
                        statepart = surname_base[randint(0,surname_len)],
                        actname = word_base[randint(0,word_len)],
                        notes = str(randint(0,100)))
        debter.save()
        court = Court(number =str(randint(0,1000)),
                      address = "Kiev",
                      name = word_base[randint(0,word_len)])
        court.save()
        comissioner = Comissioner(powertype="Type1",
                                  certificatenumber = str(randint(10000,99999)),
                                  setdate = datetime.datetime.now(),
                                  notes = "Hello"*2 )
        comissioner.save()
        act = Act(startdate = datetime.datetime.now(),
                  finishdate = datetime.datetime.now(),
                  notes = "judge is "+judge.name,
                  judgeid = judge,
                  comissionerid = comissioner,
                  courtid = court,
                  debterid = debter)
        act.save()
    return redirect("/admin")
def exists_id(data,obj):
    if "id" in data:
        try:
            print obj.objects.get(id=data["id"])
            return True
        except:
            return False
    return False