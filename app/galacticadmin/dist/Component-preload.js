//@ui5-bundle com/app/galacticadmin/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"com/app/galacticadmin/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","com/app/galacticadmin/model/models"],function(e,i,t){"use strict";return e.extend("com.app.galacticadmin.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(t.createDeviceModel(),"device")}})});
},
	"com/app/galacticadmin/controller/App.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller"],function(n){"use strict";return n.extend("com.app.galacticadmin.controller.App",{onInit:function(){}})});
},
	"com/app/galacticadmin/controller/BaseController.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/UIComponent","sap/ui/core/Fragment","sap/m/MessageBox"],function(e,t,n,o){"use strict";return e.extend("com.app.galacticadmin.controller.BaseController",{getRouter:function(){return t.getRouterFor(this)},getModel:function(e){return this.getView().getModel(e)},setModel:function(e,t){return this.getView().setModel(e,t)},getResourceBundle:function(){return this.getOwnerComponent().getModel("i18n").getResourceBundle()},loadFragment:async function(e){const t=this;const o=await n.load({id:t.getView().getId(),name:`com.app.galacticadmin.fragments.${e}`,controller:t});t.getView().addDependent(o);return o},onErrorHandling:function(e){let t=this.getResourceBundle().getText("TechnicalError");if(e["responseText"]){const{error:n}=JSON.parse(e.responseText);t=n.message.value}o.error(t,{title:"Error",actions:sap.m.MessageBox.Action.CLOSE})}})});
},
	"com/app/galacticadmin/controller/Details.controller.js":function(){sap.ui.define(["./BaseController","com/app/galacticadmin/controller/ServiceOperation"],function(e,t){"use strict";return e.extend("com.app.galacticadmin.controller.Details",{onInit:function(){this.getRouter().attachRoutePatternMatched(this.onLoaadSpaceFarerDetails,this)},onLoaadSpaceFarerDetails:function(e){const t=e.getParameter("name");if(t!=="RouteDetails"){return}const a=e.getParameter("arguments").id,i=this.getView().byId("Details");i.bindElement({path:`/GalacticSpacefarer(${a})`,parameters:{expand:"department,originPlanet,position"}})},onDeleteSpacefarer:async function(){const e=this.getView().byId("Details"),{ID:a}=e.getBindingContext().getObject(),i=this.getView().getModel(),n="/GalacticSpacefarer";try{await t.deleteRecord(i,n,a);this.getRouter().navTo("RouteHome")}catch(e){this.onErrorHandling(e)}}})});
},
	"com/app/galacticadmin/controller/Home.controller.js":function(){sap.ui.define(["./BaseController","sap/ui/model/json/JSONModel","com/app/galacticadmin/controller/ServiceOperation","sap/m/MessageToast"],function(e,t,a,o){"use strict";return e.extend("com.app.galacticadmin.controller.Home",{onInit:function(){this.initialSetUp()},initialSetUp:function(){const e={createPayload:{name:"",spacefarerNickName:"",email:"",stardustCollection:0,wormholeNavigationSkill:0,originPlanet_ID:"2a139a62-8094-46ed-85f4-024b3963f5b1",spacesuitColor:"",department_ID:"10b034d9-6b72-4f42-bdbd-956d6d485161",position_ID:"250c24c9-4616-4e14-97e8-64cb144796f2"}};this.getView().setModel(new t(e),"localModel")},onTableItemSelect:function(e){const{ID:t}=e.getSource().getSelectedContexts()[0].getObject();this.getRouter().navTo("RouteDetails",{id:t})},onCreateGalacticSpacefarer:async function(){if(!this.oCreateDialog){this.oCreateDialog=await this.loadFragment("CreateSpacefarer")}this.oCreateDialog.open()},onSubmitData:async function(){const e=this.getView().getModel("localModel").getProperty("/createPayload"),t=this.getView().getModel(),i="/GalacticSpacefarer";this.oCreateDialog.close();this.initialSetUp();try{await a.createRecord(t,e,i);o.show(this.getResourceBundle().getText("SuccessSpaceFarerCreated"))}catch(e){this.onErrorHandling(e)}},onDialogClose:function(e){const t=e.getSource().getParent();t.isOpen()&&t.close()}})});
},
	"com/app/galacticadmin/controller/ServiceOperation.js":function(){sap.ui.define([],function(){"use strict";return{createRecord:(e,r,n)=>new Promise((c,o)=>{e.create(n,r,{success:function(e){c(e)},error:function(e){o(e)}})}),deleteRecord:function(e,r,n){return new Promise((c,o)=>{e.remove(`${r}/${n}`,{success:function(e){c(e)},error:function(e){o(e)}})})}}});
},
	"com/app/galacticadmin/fragments/CreateSpacefarer.fragment.xml":'<core:FragmentDefinition\r\n    xmlns:l="sap.ui.layout"\r\n    xmlns:core="sap.ui.core"\r\n    xmlns:f="sap.ui.layout.form"\r\n    xmlns="sap.m"\r\n><Dialog\r\n        id="iCreateSpaceFarereDialog"\r\n        title="{i18n>CreateSpacefarer}"\r\n        class="sapUiResponsiveContentPadding"\r\n        resizable="true"\r\n        draggable="true"\r\n        contentWidth="30%"\r\n        contentHeight="80%"\r\n    ><content><VBox id="_IDGenVBox1"><f:SimpleForm\r\n                    id="SimpleFormDisplay354"\r\n                    editable="false"\r\n                    layout="ResponsiveGridLayout"\r\n                    labelSpanXL="3"\r\n                    labelSpanL="3"\r\n                    labelSpanM="3"\r\n                    labelSpanS="12"\r\n                    adjustLabelSpan="false"\r\n                    emptySpanXL="4"\r\n                    emptySpanL="4"\r\n                    emptySpanM="4"\r\n                    emptySpanS="0"\r\n                    columnsXL="1"\r\n                    columnsL="1"\r\n                    columnsM="1"\r\n                    singleContainerFullSize="false"\r\n                ><f:content><Label\r\n                            id="_IDGenLabel1"\r\n                            text="{i18n>Name}"\r\n                        /><Input\r\n                            id="idNameInput"\r\n                            value="{localModel>/createPayload/name}"\r\n                        /><Label\r\n                            id="idEmailLabel"\r\n                            text="{i18n>Email}"\r\n                        /><Input\r\n                            id="idEmailInput"\r\n                            value="{localModel>/createPayload/email}"\r\n                        /><Label\r\n                            id="_IDGenLabel2"\r\n                            text="{i18n>spacefarerNickName}"\r\n                        /><Input\r\n                            id="idNickNameInput"\r\n                            value="{localModel>/createPayload/spacefarerNickName}"\r\n                        /><Label\r\n                            id="_IDGenLabel3"\r\n                            text="{i18n>stardustCollection}"\r\n                        /><Input\r\n                            id="idStarDustCollectionInput"\r\n                            value="{localModel>/createPayload/stardustCollection}"\r\n                            type="Number"\r\n                        /><Label\r\n                            id="_IDGenLabel7"\r\n                            text="{i18n>spacesuitColor}"\r\n                        /><Input\r\n                            id="idSpaceSuiteColorInput"\r\n                            value="{localModel>/createPayload/spacesuitColor}"\r\n                        /><Label\r\n                            id="_IDGenLabel5"\r\n                            text="{i18n>wormholeNavigationSkill}"\r\n                        /><Input\r\n                            id="idwormholeNavigationSkillInput"\r\n                            value="{localModel>/createPayload/wormholeNavigationSkill}"\r\n                            type="Number"\r\n                        /><Label\r\n                            id="_IDGenLabel6"\r\n                            text="{i18n>OriginPlanet}"\r\n                        /><Select\r\n                            id="idOriginPlanet"\r\n                            items="{/Planet}"\r\n                            selectedKey="{localModel>/createPayload/originPlanet_ID}"\r\n                        ><core:ListItem\r\n                                id="idPlanetDetails"\r\n                                key="{ID}"\r\n                                text="{name}"\r\n                            /></Select><Label\r\n                            id="idDepartment"\r\n                            text="{i18n>Department}"\r\n                        /><Select\r\n                            id="idDepartmentList"\r\n                            items="{/Department}"\r\n                            selectedKey="{localModel>/createPayload/department_ID}"\r\n                            showSecondaryValues="true"\r\n                        ><core:ListItem\r\n                                id="idDepartmentDetails"\r\n                                key="{ID}"\r\n                                text="{name}"\r\n                                additionalText="{description}"\r\n                            /></Select><Label\r\n                            id="idPosition"\r\n                            text="{i18n>Position}"\r\n                        /><Select\r\n                            id="idPositionList"\r\n                            items="{/Position}"\r\n                            selectedKey="{localModel>/createPayload/position_ID}"\r\n                        ><core:ListItem\r\n                                id="idPositionItem"\r\n                                key="{ID}"\r\n                                text="{currentPosition}"\r\n                            /></Select></f:content></f:SimpleForm></VBox></content><beginButton><Button\r\n                id="idSaveButton"\r\n                text="{i18n>Ok}"\r\n                press="onSubmitData"\r\n                type="Accept"\r\n            /></beginButton><endButton><Button\r\n                id="idPostAlertCancelBtn"\r\n                text="{i18n>Cancel}"\r\n                press="onDialogClose"\r\n                type="Reject"\r\n            /></endButton></Dialog></core:FragmentDefinition>\r\n',
	"com/app/galacticadmin/i18n/i18n.properties":'# This is the resource bundle for com.app.galacticadmin\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Galactic Spacefarer Admin App\n\n#YDES: Application description\nappDescription=Galactic Spacefarer Admin App\n#XTIT: Main view title\ntitle=Galactic Spacefarer Admin App\n\nGalacticSpacefarer=Galactic Spacefarer\n\nGeneralInformation=General Information\n\nName=Name\n\nspacefarerNickName=Spacefarer Nick Name\nstardustCollection=StarDust Collection\nstardustCollectionStatus=Startdust Collection Status\nwormholeNavigationSkill=Wormhole Navigation Skill\nOriginPlanet=Origin Planet\nspacesuitColor=Spacesuit Color\nDepartment=Department\nDescription=Description\nPosition=Position\nEmail=Email\nCreateSpacefarer=Create Spacefarer\nTechnicalError=Some Technical error happened, please try again after some time..\nSuccessSpaceFarerCreated=Successfully Created\nDelete=Delete',
	"com/app/galacticadmin/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"com.app.galacticadmin","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:basic","version":"1.12.5","toolsId":"4aef73fe-c86e-4b59-87ea-6a724fb90991"},"dataSources":{"mainService":{"uri":"v2/GalacticAdminSRV/","type":"OData","settings":{"annotations":[],"odataVersion":"2.0"}},"AppControl":{"uri":"data/AppControl.json","type":"JSON"}},"crossNavigation":{"inbounds":{"GalacticAdmin-display":{"semanticObject":"GalacticAdmin","action":"display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.120.9","libs":{"sap.m":{},"sap.ui.core":{},"sap.f":{},"sap.suite.ui.generic.template":{},"sap.ui.comp":{},"sap.ui.generic.app":{},"sap.ui.table":{},"sap.ushell":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"com.app.galacticadmin.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"AppControl":{"type":"sap.ui.model.json.JSONModel","dataSource":"AppControl"}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"com.app.galacticadmin.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteHome","pattern":":?query:","target":["TargetHome"]},{"name":"RouteDetails","pattern":"SpaceFarer/{id}","target":["TargetDetails"]},{"name":"RouteCreate","pattern":"CreateSpaceFarer","target":["TargetCreate"]}],"targets":{"TargetHome":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"Home","viewName":"Home"},"TargetDetails":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"Details","viewName":"Details"},"TargetCreate":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"Create","viewName":"Create"}}},"rootView":{"viewName":"com.app.galacticadmin.view.App","type":"XML","async":true,"id":"App"}},"sap.cloud":{"public":true,"service":"galatic-service"}}',
	"com/app/galacticadmin/model/models.js":function(){sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"com/app/galacticadmin/view/App.view.xml":'<mvc:View controllerName="com.app.galacticadmin.controller.App"\n    xmlns:html="http://www.w3.org/1999/xhtml"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><App id="app"></App></mvc:View>\n',
	"com/app/galacticadmin/view/Details.view.xml":'<mvc:View\n    xmlns:l="sap.ui.layout"\n    xmlns:f="sap.ui.layout.form"\n    xmlns:uxap="sap.uxap"\n    controllerName="com.app.galacticadmin.controller.Details"\n    xmlns:mvc="sap.ui.core.mvc"\n    height="100%"\n    xmlns="sap.m"\n    xmlns:core="sap.ui.core"\n><uxap:ObjectPageLayout\n        id="Details"\n        enableLazyLoading="true"\n    ><uxap:headerTitle><uxap:ObjectPageDynamicHeaderTitle id="idObjectPageHeaerTitle"><uxap:expandedHeading><Title\n                        id="idTitle"\n                        text="{name}"\n                    /></uxap:expandedHeading><uxap:actions><Button\n                        id="idDeleteBtn"\n                        text="{i18n>Delete}"\n                        press=".onDeleteSpacefarer"\n                        type="Reject"\n                    /></uxap:actions></uxap:ObjectPageDynamicHeaderTitle></uxap:headerTitle><uxap:headerContent><FlexBox\n                id="idSnapHeading"\n                fitContainer="true"\n                alignItems="Center"\n            ><Avatar\n                    id="idProfileImage"\n                    src="{imageUrl}"\n                /></FlexBox></uxap:headerContent><uxap:sections><uxap:ObjectPageSection\n                id="idGeneralInformationSection"\n                titleUppercase="true"\n                title="{i18n>GeneralInformation}"\n            ><uxap:subSections><uxap:ObjectPageSubSection\n                        id="idGeneralInformationSubSection"\n                    ><uxap:blocks><VBox\n                                id="_IDGenVBox1"\n                                class="sapUiSmallMargin"\n                            ><f:SimpleForm\n                                    id="idGeneralInformationForm"\n                                    editable="false"\n                                    layout="ColumnLayout"\n                                    columnsM="2"\n                                    columnsL="3"\n                                    columnsXL="4"\n                                ><f:content><Label\n                                            id="_IDGenLabel1"\n                                            text="{i18n>Name}"\n                                        /><Text\n                                            id="_IDGenText1"\n                                            text="{name}"\n                                        /><Label\n                                            id="idEmailLabel"\n                                            text="{i18n>Email}"\n                                        /><Link\n                                            id="idEmailText"\n                                            text="{email}"\n                                            href="mailto:{email}"\n                                        /><Label\n                                            id="_IDGenLabel2"\n                                            text="{i18n>spacefarerNickName}"\n                                        /><Text\n                                            id="_IDGenText2"\n                                            text="{spacefarerNickName}"\n                                        /><Label\n                                            id="_IDGenLabel3"\n                                            text="{i18n>stardustCollection}"\n                                        /><Text\n                                            id="_IDGenText3"\n                                            text="{stardustCollection}"\n                                        /><Label\n                                            id="_IDGenLabel7"\n                                            text="{i18n>spacesuitColor}"\n                                        /><Text\n                                            id="_IDGenText7"\n                                            text="{spacesuitColor}"\n                                        /><Label\n                                            id="_IDGenLabel4"\n                                            text="{i18n>stardustCollectionStatus}"\n                                        /><Text\n                                            id="_IDGenText4"\n                                            text="{stardustCollectionStatus}"\n                                        /><Label\n                                            id="_IDGenLabel5"\n                                            text="{i18n>wormholeNavigationSkill}"\n                                        /><Text\n                                            id="_IDGenText5"\n                                            text="{wormholeNavigationSkill}"\n                                        /><Label\n                                            id="_IDGenLabel6"\n                                            text="{i18n>OriginPlanet}"\n                                        /><Text\n                                            id="_IDGenText6"\n                                            text="{originPlanet/name}"\n                                        /></f:content></f:SimpleForm></VBox></uxap:blocks></uxap:ObjectPageSubSection></uxap:subSections></uxap:ObjectPageSection><uxap:ObjectPageSection\n                id="iddepartmentSection"\n                titleUppercase="true"\n                title="{i18n>Department}"\n            ><uxap:subSections><uxap:ObjectPageSubSection id="idDepartmentSubsection"><uxap:blocks><VBox\n                                id="idDepartmentVBox"\n                                class="sapUiSmallMargin"\n                            ><f:SimpleForm\n                                    id="idDepartmentForm"\n                                    editable="false"\n                                    layout="ColumnLayout"\n                                    columnsM="2"\n                                    columnsL="3"\n                                    columnsXL="4"\n                                ><Label\n                                        id="_IDGenLabel8"\n                                        text="{i18n>Name}"\n                                    /><Text\n                                        id="_IDGenText8"\n                                        text="{department/name}"\n                                        visible="{AppControl>/isEditMode}"\n                                    /><Label\n                                        id="_IDGenLabel9"\n                                        text="{i18n>Description}"\n                                    /><Text\n                                        id="_IDGenText9"\n                                        text="{department/description}"\n                                    /></f:SimpleForm></VBox></uxap:blocks></uxap:ObjectPageSubSection></uxap:subSections></uxap:ObjectPageSection><uxap:ObjectPageSection\n                id="idPositionSection"\n                titleUppercase="true"\n                title="{i18n>Position}"\n            ><uxap:subSections><uxap:ObjectPageSubSection id="idPositionSubsection"><VBox\n                            id="idPositionVBox"\n                            class="sapUiSmallMargin"\n                        ><f:SimpleForm\n                                id="idPositionForm"\n                                editable="false"\n                                layout="ColumnLayout"\n                                columnsM="2"\n                                columnsL="3"\n                                columnsXL="4"\n                            ><Label\n                                    id="_IDGenLabel10"\n                                    text="{i18n>CurrentPosition}"\n                                /><Text\n                                    id="_IDGenText10"\n                                    text="{position/currentPosition}"\n                                /></f:SimpleForm></VBox></uxap:ObjectPageSubSection></uxap:subSections></uxap:ObjectPageSection></uxap:sections></uxap:ObjectPageLayout></mvc:View>\n',
	"com/app/galacticadmin/view/Home.view.xml":'<mvc:View\n    xmlns:smartfilterbar="sap.ui.comp.smartfilterbar"\n    xmlns:smarttable="sap.ui.comp.smarttable"\n    controllerName="com.app.galacticadmin.controller.Home"\n    xmlns:mvc="sap.ui.core.mvc"\n    height="100%"\n    displayBlock="true"\n    xmlns="sap.m"\n><Page\n        id="idAdminPage"\n        title="{i18n>appTitle}"\n    ><headerContent><Button\n                id="idCreateButton"\n                text="Create"\n                press=".onCreateGalacticSpacefarer"\n            /></headerContent><smartfilterbar:SmartFilterBar\n            id="idFilterBarForSpacefarer"\n            entitySet="GalacticSpacefarer"\n            useToolbar="false"\n        /><smarttable:SmartTable\n            id="idAdminpageListReport"\n            tableType="ResponsiveTable"\n            entitySet="GalacticSpacefarer"\n            header="{i18n>GalacticSpacefarer}"\n            showRowCount="true"\n            smartFilterId="idFilterBarForSpacefarer"\n            enableAutoBinding="true"\n            enableExport="true"\n        ><Table\n                id="idTableConfigChange"\n                mode="SingleSelectMaster"\n                alternateRowColors="true"\n                growing="true"\n                growingThreshold="20"\n                growingScrollToLoad="true"\n                itemPress=".onTableItemSelect"\n            ><items><ColumnListItem\n                        id="idColumnListConfigChange"\n                        type="Navigation"\n                    /></items></Table></smarttable:SmartTable></Page></mvc:View>\n'
}});
