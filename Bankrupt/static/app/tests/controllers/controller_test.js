describe("CourtCtrl Test", function () {

    var backend, mockscope, controller, base_url;
    beforeEach(angular.mock.module("Bankrupt"));
    beforeEach(angular.mock.inject(function ($httpBackend, baseUrl) {
        backend = $httpBackend;
        base_url = baseUrl;
        backend.whenGET(base_url + "court/").respond([{"id": 18281, "number": "191", "address": "Kiev", "name": "Иван", "archive": false},
            {"id": 18282, "number": "37", "address": "Kiev", "name": "Прохор", "archive": false}]);
        backend.whenGET('/static/app/views/court/list.html').respond(200,'');



    }));

    beforeEach(angular.mock.inject(function ($rootScope, $controller, $http) {
        mockscope = $rootScope.$new;

        controller = $controller("CourtCtrl", {
            $scope: mockscope,
            $http: $http
        });

        backend.flush();



    }));
    it("Get Test", function () {

        expect(mockscope.courtList.length).toEqual(2);
        expect(mockscope.courtList[0].id).toEqual(18281);
        expect(mockscope.courtList[0].number).toEqual("191");
        expect(mockscope.courtList[0].address).toEqual("Kiev");
        expect(mockscope.courtList[0].name).toEqual("Иван");
        expect(mockscope.courtList[0].archive).toEqual(false);

    });
    it("Add Test", function () {
        expect(mockscope.courtList.length).toEqual(2);
        backend.whenPOST(base_url + "court/").respond({ id: 1234,"number": "44444", "address": "Zhitomir", "name": "Прохор", "archive": false});

        var item = { "number": "44444", "address": "Zhitomir", "name": "Прохор", "archive": false};

        mockscope.add(item);
        backend.flush();

        expect(mockscope.courtList.length).toEqual(3);

        expect(mockscope.courtList[2].id).toEqual(1234);
        expect(mockscope.courtList[2].number).toEqual("44444");
        expect(mockscope.courtList[2].address).toEqual("Zhitomir");
        expect(mockscope.courtList[2].name).toEqual("Прохор");
        expect(mockscope.courtList[2].archive).toEqual(false);


    });
    it("Edit Test",function(){
        expect(mockscope.courtList.length).toEqual(2);

        var item = mockscope.courtList[0];
        expect(item.address).toEqual("Kiev");
        backend.whenPUT(base_url + "court/18281/").respond({"id": 18281, "number": "37", "address": "Zhitomir", "name": "Прохор", "archive": false});
        backend.whenPOST(base_url + "court/18281/").respond({"id": 18281, "number": "37", "address": "Zhitomir", "name": "Прохор", "archive": false});

        item.address="Zhitomir";
        mockscope.edit(item);
        backend.flush();

        expect(mockscope.courtList.length).toEqual(2);
        expect(mockscope.courtList[0].id).toEqual(18281);
        expect(mockscope.courtList[0].number).toEqual("37");
        expect(mockscope.courtList[0].address).toEqual("Zhitomir");
        expect(mockscope.courtList[0].name).toEqual("Прохор");
        expect(mockscope.courtList[0].archive).toEqual(false);

    })




});
