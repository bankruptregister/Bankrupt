import datetime

from django.shortcuts import redirect
from django.shortcuts import render_to_response
from django.template.loader import get_template

from models import Judge,Comissioner,Act,Court,Debter
from serializers import JudgeSerializer,DebterSerializer,ComissionerSerializer,CourtSerializer,ActSerializer
from django.http import Http404
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework import generics
from random import randint
import random

import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def getIndex(request):
    return render_to_response('index.html')

@api_view(['GET','POST','PUT'])
def judgeList(request):
    if request.method == 'GET':
        js = Judge.objects.all()
        serializer = JudgeSerializer(js, many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)
    elif request.method == 'POST' or request.method == 'PUT':
        # if(exists_id(request.data,Judge)):
        #     return Response(status=status.HTTP_400_BAD_REQUEST)
        serializer = JudgeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['GET','POST','PUT','DELETE'])
def judgeSingle(request,id):

    if request.method == 'GET':
        judge = get_object(id,Judge)
        serializer = JudgeSerializer(judge)
        return Response(serializer.data,status=status.HTTP_200_OK)

    if request.method == 'PUT' or request.method == 'POST':
        judge = get_object(id,Judge)
        serializer = JudgeSerializer(judge, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    if request.method == 'DELETE':
        judge = get_object(id,Judge)
        judge.delete()
        return Response(status=status.HTTP_202_ACCEPTED)

@api_view(['GET','POST','PUT'])
def debterList(request):
    if request.method == 'GET':
        js = Debter.objects.all()
        serializer = DebterSerializer(js, many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)
    elif request.method == 'POST' or request.method == 'PUT':
        serializer = DebterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['GET','POST','PUT','DELETE'])
def debterSingle(request,id):
    if request.method == 'GET':
        debter = get_object(id,Debter)
        serializer = DebterSerializer(debter)
        return Response(serializer.data,status=status.HTTP_200_OK)
    if request.method == 'PUT' or request.method == 'POST':
        debter = get_object(id,Debter)
        serializer = DebterSerializer(debter, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    if request.method == 'DELETE':
        debter = get_object(id,Debter)
        debter.delete()
        return Response(status=status.HTTP_202_ACCEPTED)

@api_view(['GET','POST','PUT'])
def courtList(request):
    if request.method == 'GET':
        js = Court.objects.all()
        serializer = CourtSerializer(js, many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)
    elif request.method == 'POST' or request.method == 'PUT':
        serializer = CourtSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['GET','POST','PUT','DELETE'])
def courtSingle(request,id):
    if request.method == 'GET':
        court = get_object(id,Court)
        serializer = CourtSerializer(court)
        return Response(serializer.data,status=status.HTTP_200_OK)
    if request.method == 'PUT' or request.method == 'POST':
        court = get_object(id,Court)
        serializer = CourtSerializer(court, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    if request.method == 'DELETE':
        court = get_object(id,Court)
        court.delete()
        return Response(status=status.HTTP_202_ACCEPTED)

@api_view(['GET','POST','PUT'])
def comissionerList(request):
    if request.method == 'GET':
        js = Comissioner.objects.all()
        serializer = ComissionerSerializer(js, many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)
    elif request.method == 'POST' or request.method == 'PUT':
        serializer = ComissionerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['GET','POST','PUT','DELETE'])
def comissionerSingle(request,id):
    if request.method == 'GET':
        comissioner = get_object(id,Comissioner)
        serializer = ComissionerSerializer(comissioner)
        return Response(serializer.data,status=status.HTTP_200_OK)
    if request.method == 'PUT' or request.method == 'POST':
        comissioner = get_object(id,Comissioner)
        serializer = ComissionerSerializer(comissioner, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    if request.method == 'DELETE':
        comissioner = get_object(id,Comissioner)
        comissioner.delete()
        return Response(status=status.HTTP_202_ACCEPTED)

@api_view(['GET','POST','PUT'])
def actList(request):
    if request.method == 'GET':
        js = Act.objects.all()
        serializer = ActSerializer(js, many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)
    elif request.method == 'POST' or request.method == 'PUT':
        serializer = ActSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['GET','POST','PUT','DELETE'])
def actSingle(request,id):
    if request.method == 'GET':
        act = get_object(id,Act)
        serializer = ActSerializer(act)
        return Response(serializer.data,status=status.HTTP_200_OK)
    if request.method == 'PUT' or request.method == 'POST':
        act = get_object(id,Act)
        serializer = ActSerializer(act, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    if request.method == 'DELETE':
        act = get_object(id,Act)
        act.delete()
        return Response(status=status.HTTP_202_ACCEPTED)


# Helpers
def get_object(id,model):
        try:
            return model.objects.get(id=id)
        except model.DoesNotExist:
            raise Http404
# def generate_acts(request,count):
#     count = int(count)
#     Act.objects.all().delete()
#     Judge.objects.all().delete()
#     Comissioner.objects.all().delete()
#     Debter.objects.all().delete()
#     Court.objects.all().delete()
#
#     word_base = ["Jack ","Ron ","Tonni ","Moker ","genster ","Dobrei","asistant","Gogo","Allah"]
#     surname_base = ["Peterson", "Ronny","Wilson","Test1","Rew","Gostly","Amigo"]
#     word_len =len(word_base)-1
#     surname_len = len(surname_base)-1
#     for i in xrange(count):
#         judge = Judge(name = word_base[randint(0,word_len)],
#                       surname = surname_base[randint(0,surname_len)],
#                       middlename = word_base[randint(0,word_len)])
#         judge.save()
#         debter = Debter(type = randint(0,1),
#                         name = word_base[randint(0,word_len)],
#                         number = word_base[randint(0,word_len)],
#                         kved = "ONE",
#                         statepart = surname_base[randint(0,surname_len)],
#                         actname = word_base[randint(0,word_len)],
#                         notes = str(randint(0,100)))
#         debter.save()
#         court = Court(number =str(randint(0,1000)),
#                       address = "Kiev",
#                       name = word_base[randint(0,word_len)])
#         court.save()
#         comissioner = Comissioner(powertype="Type1",
#                                   certificatenumber = str(randint(10000,99999)),
#                                   setdate = datetime.datetime.now(),
#                                   notes = "Hello"*2 )
#         comissioner.save()
#         act = Act(startdate = datetime.datetime.now(),
#                   finishdate = datetime.datetime.now(),
#                   notes = "judge is "+judge.name,
#                   judgeid = judge,
#                   comissionerid = comissioner,
#                   courtid = court,
#                   debterid = debter)
#         act.save()
#     return redirect("/index")

def exists_id(data,obj):
    if "id" in data:
        try:
            print obj.objects.get(id=data["id"])
            return True
        except:
            return False
    return False

def generate_acts(request,count):


    count = int(count)
    Act.objects.all().delete()
    Judge.objects.all().delete()
    Comissioner.objects.all().delete()
    Debter.objects.all().delete()
    Court.objects.all().delete()

    word_base = open(os.path.join(BASE_DIR, 'Bankrupt/static/names.txt'),"r").read().split("\n")
    surname_base = open(os.path.join(BASE_DIR, 'Bankrupt/static/surnames.txt'),"r").read().split("\n")
    for i in xrange(count):
        judge = Judge(name = random.choice(word_base),
                      surname = random.choice(surname_base),
                      middlename = random.choice(word_base))
        judge.save()
        debter = Debter(type = randint(0,1),
                        name = random.choice(word_base),
                        number = random.choice(word_base),
                        kved = "ONE",
                        statepart = random.choice(surname_base),
                        actname = random.choice(word_base),
                        notes = str(randint(0,100)))
        debter.save()
        court = Court(number =str(randint(0,1000)),
                      address = "Kiev",
                      name = random.choice(word_base))
        court.save()
        comissioner = Comissioner(powertype=str("Type1"+str(randint(0,999))),
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
    return redirect("/index")
