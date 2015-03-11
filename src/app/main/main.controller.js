'use strict';
/*jshint esnext: true */

class MainCtrl {
  constructor ($scope,$socket) {
    $scope.toDoList = [{
      title:'Titulo 1',
      desc:'Lorem ipsum dolor sit amet',
      assigned:false,
      grid:{
        rowSpan:1,
        colSpan:1
      },
      size:'normal'
    },
    {
      title:'Titulo 1',
      desc:'Lorem ipsum dolor sit amet',
      assigned:false,
      grid:{
        rowSpan:1,
        colSpan:1
      },
      size:'normal'
    },
    {
      title:'Titulo 1',
      desc:'Lorem ipsum dolor sit amet',
      assigned:false,
      grid:{
        rowSpan:1,
        colSpan:1
      },
      size:'normal'
    },
    {
      title:'Titulo 1',
      desc:'Lorem ipsum dolor sit amet',
      assigned:false,
      grid:{
        rowSpan:1,
        colSpan:1
      },
      size:'normal'
    },
    {
      title:'Titulo 1',
      desc:'Lorem ipsum dolor sit amet',
      assigned:false,
      grid:{
        rowSpan:1,
        colSpan:1
      },
      size:'normal'
    },
    {
      title:'Titulo 1',
      desc:'Lorem ipsum dolor sit amet',
      assigned:false,
      grid:{
        rowSpan:1,
        colSpan:1
      },
      size:'normal'
    },
    {
      title:'Titulo 1',
      desc:'Lorem ipsum dolor sit amet',
      assigned:false,
      grid:{
        rowSpan:1,
        colSpan:1
      },
      size:'normal'
    },
    {
      title:'Titulo 1',
      desc:'Lorem ipsum dolor sit amet',
      assigned:false,
      grid:{
        rowSpan:1,
        colSpan:1
      },
      size:'normal'
    },
    {
      title:'Titulo 1',
      desc:'Lorem ipsum dolor sit amet',
      assigned:false,
      grid:{
        rowSpan:1,
        colSpan:1
      },
      size:'normal'
    },
    {
      title:'Titulo 1',
      desc:'Lorem ipsum dolor sit amet',
      assigned:false,
      grid:{
        rowSpan:1,
        colSpan:1
      },
      size:'normal'
    }];
    $scope.changeSize = function(obj) {
      if (obj.size=='normal') {
        obj.grid.rowSpan = 1;
        obj.grid.colSpan = 2;
        obj.size = 'double';        
      } else if (obj.size=='double') {
        obj.grid.rowSpan = 1;
        obj.grid.colSpan = 1;
        obj.size = 'normal';
      }
    };
  }
}

MainCtrl.$inject = ['$scope','$socket'];

export default MainCtrl;
