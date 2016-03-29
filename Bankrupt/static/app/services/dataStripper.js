angular.module("Bankrupt").factory("dataStripper",function($filter){
    var Stripper = {};
        Stripper.stripActIds = function(act){
            if(act.judgeid.id) act.judgeid = act.judgeid.id;
            if(act.debterid.id) act.debterid = act.debterid.id;
            if(act.courtid.id) act.courtid = act.courtid.id;
            if(act.comissionerid.id) act.comissionerid = act.comissionerid.id;
            return act;
        };
        Stripper.stripDate = function(date){
            return $filter('date')(date, "yyyy-MM-dd")
        };
        Stripper.stripAct =  function(act){
            act = Stripper.stripActIds(act);
            act.startdate = Stripper.stripDate(act.startdate);
            act.finishdate = Stripper.stripDate(act.finishdate);
            return act;
        };
        Stripper.stripComm = function(comm){
            comm.setdate = Stripper.stripDate(comm.setdate);
            return comm;
        };
    return Stripper;



});
