from rest_framework import serializers
from models import Judge,Comissioner,Act,Court,Debter


class JudgeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Judge
        fields = ['id','name','surname','middlename']

class DebterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Debter
        fields = ['id','type','name','number','kved','statepart','actname','notes']

class CourtSerializer(serializers.ModelSerializer):
    class Meta:
        model = Court
        fields = ['id','number','address','name']

class ComissionerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comissioner
        fields = ['id','powertype','certificatenumber','setdate','notes']

#Shoud be better solution
class ActSerializer(serializers.ModelSerializer):
    class Meta:
        model = Act
        fields = ['id','startdate','finishdate','notes','judgeid','comissionerid','courtid','debterid']








