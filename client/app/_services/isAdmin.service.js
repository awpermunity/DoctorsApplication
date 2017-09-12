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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var auth_guard_1 = require("../_guards/auth.guard");
var authentication_service_1 = require("../_services/authentication.service");
var isAdminService = /** @class */ (function () {
    function isAdminService(authGuard, authenticationService) {
        this.authGuard = authGuard;
        this.authenticationService = authenticationService;
        this.user = '';
        this.userToCheck = {};
        this.user = authenticationService.getCurrentUser();
        console.log("USER: ", this.user);
        if (this.user != '') {
            this.userToCheck = this.userToObject(this.user);
        }
        else {
            alert('User empty');
        }
        console.log("userToCheck: ", this.userToCheck);
        this.isAdmin(this.userToCheck);
    }
    isAdminService.prototype.userToObject = function (value) {
        var user = JSON.parse(value);
        console.log('userParse', user);
        return user;
    };
    isAdminService.prototype.isAdmin = function (value) {
        if (value.username === "admin") {
            this.admin = true;
            console.log('admin', this.admin);
        }
        return null;
    };
    isAdminService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [auth_guard_1.AuthGuard,
            authentication_service_1.AuthenticationService])
    ], isAdminService);
    return isAdminService;
}());
exports.isAdminService = isAdminService;
//# sourceMappingURL=isAdmin.service.js.map