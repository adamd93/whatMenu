"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var menu_service_1 = require("./menu.service");
var MenuComponent = (function () {
    function MenuComponent(_route, _router, _itemService) {
        this._route = _route;
        this._router = _router;
        this._itemService = _itemService;
        this.pageTitle = 'Menu';
    }
    MenuComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    MenuComponent.prototype.search = function () {
        var _this = this;
        this._itemService.getItem()
            .then(function (items) { return _this.items = items; }, function (error) { return _this.errorMessage = error; });
    };
    MenuComponent.prototype.onBack = function () {
        this._router.navigate(['/menu']);
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/Menu/menu.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        menu_service_1.ItemService])
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map