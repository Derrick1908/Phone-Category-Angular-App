'use strict';

//Register `phoneList` component, along with its associated controller and template
angular.
    module('phoneList').
    component('phoneList',{ //This is the name what AngularJS uses to match to the `<phone-list>` element.
        templateUrl: 'phone-list/phone-list.template.html',
        controller: function PhoneListController() {
            this.phones = [
                {
                    name: 'Nexus S',
                    snippet: 'Fast just got faster with Nexus S'
                },{
                    name: 'Motorola XOOM™ with Wi-Fi',
                    snippet: 'The Next, Next Generation Tablet'
                },{
                    name: 'Motorola XOOM™',
                    snippet: 'The Next, Next Generation Tablet'
                }
            ];
        }
    });
