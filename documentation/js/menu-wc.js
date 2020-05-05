'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">archstraw documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/ApiModule.html" data-type="entity-link">ApiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ApiModule-14571364341bc5afe0c958c9cf09dbbf"' : 'data-target="#xs-controllers-links-module-ApiModule-14571364341bc5afe0c958c9cf09dbbf"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ApiModule-14571364341bc5afe0c958c9cf09dbbf"' :
                                            'id="xs-controllers-links-module-ApiModule-14571364341bc5afe0c958c9cf09dbbf"' }>
                                            <li class="link">
                                                <a href="controllers/ApiController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ApiController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-244a654853657a276d3f82bca7e897f5"' : 'data-target="#xs-controllers-links-module-AppModule-244a654853657a276d3f82bca7e897f5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-244a654853657a276d3f82bca7e897f5"' :
                                            'id="xs-controllers-links-module-AppModule-244a654853657a276d3f82bca7e897f5"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-244a654853657a276d3f82bca7e897f5"' : 'data-target="#xs-injectables-links-module-AppModule-244a654853657a276d3f82bca7e897f5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-244a654853657a276d3f82bca7e897f5"' :
                                        'id="xs-injectables-links-module-AppModule-244a654853657a276d3f82bca7e897f5"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-c8520aeaf65eb18265ce78dd9c346938"' : 'data-target="#xs-injectables-links-module-AuthModule-c8520aeaf65eb18265ce78dd9c346938"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-c8520aeaf65eb18265ce78dd9c346938"' :
                                        'id="xs-injectables-links-module-AuthModule-c8520aeaf65eb18265ce78dd9c346938"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/JwtAuthModule.html" data-type="entity-link">JwtAuthModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-JwtAuthModule-046dcd8f0c3cb837950db177b8084a50"' : 'data-target="#xs-injectables-links-module-JwtAuthModule-046dcd8f0c3cb837950db177b8084a50"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-JwtAuthModule-046dcd8f0c3cb837950db177b8084a50"' :
                                        'id="xs-injectables-links-module-JwtAuthModule-046dcd8f0c3cb837950db177b8084a50"' }>
                                        <li class="link">
                                            <a href="injectables/JwtAuthService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>JwtAuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/JwtRefreshAuthModule.html" data-type="entity-link">JwtRefreshAuthModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-JwtRefreshAuthModule-d5e2fdfe071ef8a8dec97abda50587e3"' : 'data-target="#xs-injectables-links-module-JwtRefreshAuthModule-d5e2fdfe071ef8a8dec97abda50587e3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-JwtRefreshAuthModule-d5e2fdfe071ef8a8dec97abda50587e3"' :
                                        'id="xs-injectables-links-module-JwtRefreshAuthModule-d5e2fdfe071ef8a8dec97abda50587e3"' }>
                                        <li class="link">
                                            <a href="injectables/JwtRefreshAuthService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>JwtRefreshAuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SigninModule.html" data-type="entity-link">SigninModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-SigninModule-d0f582ffd59ad9f2180c5aa0362d275f"' : 'data-target="#xs-controllers-links-module-SigninModule-d0f582ffd59ad9f2180c5aa0362d275f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SigninModule-d0f582ffd59ad9f2180c5aa0362d275f"' :
                                            'id="xs-controllers-links-module-SigninModule-d0f582ffd59ad9f2180c5aa0362d275f"' }>
                                            <li class="link">
                                                <a href="controllers/SigninController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SigninController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SigninModule-d0f582ffd59ad9f2180c5aa0362d275f"' : 'data-target="#xs-injectables-links-module-SigninModule-d0f582ffd59ad9f2180c5aa0362d275f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SigninModule-d0f582ffd59ad9f2180c5aa0362d275f"' :
                                        'id="xs-injectables-links-module-SigninModule-d0f582ffd59ad9f2180c5aa0362d275f"' }>
                                        <li class="link">
                                            <a href="injectables/SigninService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SigninService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SignonModule.html" data-type="entity-link">SignonModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-SignonModule-0ea1b135b99d802c6a8a34b745b653ba"' : 'data-target="#xs-controllers-links-module-SignonModule-0ea1b135b99d802c6a8a34b745b653ba"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SignonModule-0ea1b135b99d802c6a8a34b745b653ba"' :
                                            'id="xs-controllers-links-module-SignonModule-0ea1b135b99d802c6a8a34b745b653ba"' }>
                                            <li class="link">
                                                <a href="controllers/SignonController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SignonController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SignonModule-0ea1b135b99d802c6a8a34b745b653ba"' : 'data-target="#xs-injectables-links-module-SignonModule-0ea1b135b99d802c6a8a34b745b653ba"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SignonModule-0ea1b135b99d802c6a8a34b745b653ba"' :
                                        'id="xs-injectables-links-module-SignonModule-0ea1b135b99d802c6a8a34b745b653ba"' }>
                                        <li class="link">
                                            <a href="injectables/SignonService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SignonService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link">UsersModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-1106c1365f90dc700886bcfd3f5135d8"' : 'data-target="#xs-injectables-links-module-UsersModule-1106c1365f90dc700886bcfd3f5135d8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-1106c1365f90dc700886bcfd3f5135d8"' :
                                        'id="xs-injectables-links-module-UsersModule-1106c1365f90dc700886bcfd3f5135d8"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/WorkModule.html" data-type="entity-link">WorkModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-WorkModule-8fb26686dd35ddec2698276ba93f17ff"' : 'data-target="#xs-controllers-links-module-WorkModule-8fb26686dd35ddec2698276ba93f17ff"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-WorkModule-8fb26686dd35ddec2698276ba93f17ff"' :
                                            'id="xs-controllers-links-module-WorkModule-8fb26686dd35ddec2698276ba93f17ff"' }>
                                            <li class="link">
                                                <a href="controllers/WorkDayController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WorkDayController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/WorkerController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WorkerController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-WorkModule-8fb26686dd35ddec2698276ba93f17ff"' : 'data-target="#xs-injectables-links-module-WorkModule-8fb26686dd35ddec2698276ba93f17ff"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-WorkModule-8fb26686dd35ddec2698276ba93f17ff"' :
                                        'id="xs-injectables-links-module-WorkModule-8fb26686dd35ddec2698276ba93f17ff"' }>
                                        <li class="link">
                                            <a href="injectables/WorkService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>WorkService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link">JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link">LocalAuthGuard</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/JwtRefreshAuthGuard.html" data-type="entity-link">JwtRefreshAuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Payload.html" data-type="entity-link">Payload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserModel.html" data-type="entity-link">UserModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WorkDay.html" data-type="entity-link">WorkDay</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WorkDayModel.html" data-type="entity-link">WorkDayModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Worker.html" data-type="entity-link">Worker</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Worker-1.html" data-type="entity-link">Worker</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Worker-2.html" data-type="entity-link">Worker</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WorkerModel.html" data-type="entity-link">WorkerModel</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});