describe("actDataTest",function(){
    var backend,act_data,respon;
    beforeEach(angular.mock.module("Bankrupt"));

    beforeEach(angular.mock.inject(function($httpBackend,baseUrl,actData){
        backend = $httpBackend;
        act_data = actData;


        backend.whenGET(baseUrl+"judge/").respond([{"id":18300,"name":"Гурий"},{"id":18301,"name":"Амвросий"}]);
        backend.whenGET(baseUrl+"court/").respond([{"id":18281,"number":"191"},{"id":18283,"number":"175"}]);
        backend.whenGET(baseUrl+"comissioner/").respond([{"powertype":"Type1941","certificatenumber":"86751"},{"powertype":"Type1041","certificatenumber":"86000"}]);
        backend.whenGET(baseUrl+"debter/").respond([{"id":18292,"type":1},{"id":18294,"type":5}]);


    }));

    it("getJudges Test",function(){
        act_data.getJudges().then(function(response){
            respon = response;
        });
        backend.flush();
        expect(respon).toBeDefined();
        expect(respon.status).toEqual(200);
        expect(respon.data.length).toEqual(2);
        expect(respon.data[0].name).toEqual("Гурий");
        expect(respon.data[0].id).toEqual(18300);
        expect(respon.data[1].id).toEqual(18301);
        expect(respon.data[1].name).toEqual("Амвросий");
    });
    it("getDebters Test",function(){
        act_data.getDebters().then(function(response){
            respon = response;
        });
        backend.flush();
        expect(respon).toBeDefined();
        expect(respon.status).toEqual(200);
        expect(respon.data.length).toEqual(2);
        expect(respon.data[0].id).toEqual(18292);
        expect(respon.data[0].type).toEqual(1);
        expect(respon.data[1].id).toEqual(18294);
        expect(respon.data[1].type).toEqual(5);
    });
    it("getCourts Test",function(){
        act_data.getCourts().then(function(response){
            respon = response;
        });
        backend.flush();
        expect(respon).toBeDefined();
        expect(respon.status).toEqual(200);
        expect(respon.data.length).toEqual(2);
        expect(respon.data[0].id).toEqual(18281);
        expect(respon.data[0].number).toEqual("191");
        expect(respon.data[1].id).toEqual(18283);
        expect(respon.data[1].number).toEqual("175");
    });
    it("getComissioners Test",function(){
        act_data.getComissioners().then(function(response){
            respon = response;
        });
        backend.flush();
        expect(respon).toBeDefined();
        expect(respon.status).toEqual(200);
        expect(respon.data.length).toEqual(2);
        expect(respon.data[0].powertype).toEqual("Type1941");
        expect(respon.data[0].certificatenumber).toEqual("86751");
        expect(respon.data[1].powertype).toEqual("Type1041");
        expect(respon.data[1].certificatenumber).toEqual("86000");
    });

});
describe("dataStripperTest",function(){
    var data_stripper;
    beforeEach(angular.mock.module("Bankrupt"));

    beforeEach(angular.mock.inject(function(dataStripper){
        data_stripper=dataStripper;
    }));

    it("stripActIds Test",function(){
        var unstripped_act = {"id":2487,"startdate":"2016-04-06","finishdate":"2016-04-06","notes":"judge is Гурий",
            "judgeid":{"id":18300,"name":"Гурий","surname":"Куликов","middlename":"Елизар","archive":false},
            "comissionerid":{"id":18294,"powertype":"Type1433","certificatenumber":"47112","setdate":"2016-04-06","notes":"HelloHello","archive":false},
            "courtid":{"id":18285,"number":"230","address":"Kiev","name":"Святополк","archive":false},
            "debterid":{"id":18293,"type":1,"name":"Порфирий","number":"Антонин","kved":"ONE","statepart":"Новиков","actname":"Ульян","notes":"74","archive":false},
            "archive":false};

        var stripped_act = data_stripper.stripAct(unstripped_act);

        expect(stripped_act.judgeid).toEqual(18300);
        expect(stripped_act.courtid).toEqual(18285);
        expect(stripped_act.debterid).toEqual(18293);
        expect(stripped_act.comissionerid).toEqual(18294);
    });
    it("stripDate Test",function(){
        var unstripped_date = new Date(2016,7,12);
        var stripped_date = data_stripper.stripDate(unstripped_date);
        expect(stripped_date).toEqual("2016-08-12");

    });
});


















