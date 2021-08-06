import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { AppDownloadComponent } from './components/common/app-download/app-download.component';
import { HowItWorksComponent } from './components/common/how-it-works/how-it-works.component';
import { HomeoneBlogComponent } from './components/pages/home-demo-one/homeone-blog/homeone-blog.component';
import { FeedbackStyleOneComponent } from './components/common/feedback-style-one/feedback-style-one.component';
import { HomeoneDestinationsComponent } from './components/pages/home-demo-one/homeone-destinations/homeone-destinations.component';
import { CategoryComponent } from './components/common/category/category.component';
import { HomeoneListingsComponent } from './components/pages/home-demo-one/homeone-listings/homeone-listings.component';
import { FeaturesComponent } from './components/common/features/features.component';
import { HomeoneBannerComponent } from './components/pages/home-demo-one/homeone-banner/homeone-banner.component';
import { FooterStyleOneComponent } from './components/common/footer-style-one/footer-style-one.component';
import { NavbarStyleOneComponent } from './components/common/navbar-style-one/navbar-style-one.component';
import { NavbarStyleTwoComponent } from './components/common/navbar-style-two/navbar-style-two.component';
import { HometwoBannerComponent } from './components/pages/home-demo-two/hometwo-banner/hometwo-banner.component';
import { HometwoListingsComponent } from './components/pages/home-demo-two/hometwo-listings/hometwo-listings.component';
import { HometwoDestinationsComponent } from './components/pages/home-demo-two/hometwo-destinations/hometwo-destinations.component';
import { HometwoEventsComponent } from './components/pages/home-demo-two/hometwo-events/hometwo-events.component';
import { HometwoBlogComponent } from './components/pages/home-demo-two/hometwo-blog/hometwo-blog.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { PartnerComponent } from './components/common/partner/partner.component';
import { TeamComponent } from './components/common/team/team.component';
import { FunfactsComponent } from './components/common/funfacts/funfacts.component';
import { HowItWorksPageComponent } from './components/pages/how-it-works-page/how-it-works-page.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { FooterStyleTwoComponent } from './components/common/footer-style-two/footer-style-two.component';
import { BlogGridComponent } from './components/pages/blog-grid/blog-grid.component';
import { BlogRightSidebarComponent } from './components/pages/blog-right-sidebar/blog-right-sidebar.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { ProductsListComponent } from './components/pages/products-list/products-list.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { ProductsDetailsComponent } from './components/pages/products-details/products-details.component';
import { RelatedProductsComponent } from './components/pages/products-details/related-products/related-products.component';
import { AuthorProfileComponent } from './components/pages/author-profile/author-profile.component';
import { CategoriesComponent } from './components/pages/categories/categories.component';
import { TopPlaceComponent } from './components/pages/top-place/top-place.component';
import { ListingsDetailsComponent } from './components/pages/listings-details/listings-details.component';
import { EventsDetailsComponent } from './components/pages/events-details/events-details.component';
import { EventsComponent } from './components/pages/events/events.component';
import { VerticalListingsLeftSidebarComponent } from './components/pages/vertical-listings-left-sidebar/vertical-listings-left-sidebar.component';
import { VerticalListingsRightSidebarComponent } from './components/pages/vertical-listings-right-sidebar/vertical-listings-right-sidebar.component';
import { VerticalListingsFullWidthComponent } from './components/pages/vertical-listings-full-width/vertical-listings-full-width.component';
import { GridListingsLeftSidebarComponent } from './components/pages/grid-listings-left-sidebar/grid-listings-left-sidebar.component';
import { GridListingsRightSidebarComponent } from './components/pages/grid-listings-right-sidebar/grid-listings-right-sidebar.component';
import { GridListingsFullWidthComponent } from './components/pages/grid-listings-full-width/grid-listings-full-width.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { DashboardNavbarComponent } from './components/common/dashboard-navbar/dashboard-navbar.component';
import { DashboardSidemenuComponent } from './components/common/dashboard-sidemenu/dashboard-sidemenu.component';
import { CopyrightsComponent } from './components/pages/dashboard/copyrights/copyrights.component';
import { StatsComponent } from './components/pages/dashboard/stats/stats.component';
import { RecentActivitiesComponent } from './components/pages/dashboard/recent-activities/recent-activities.component';
import { DashboardMessagesComponent } from './components/pages/dashboard/dashboard-messages/dashboard-messages.component';
import { DashboardBookingsComponent } from './components/pages/dashboard/dashboard-bookings/dashboard-bookings.component';
import { DashboardWalletComponent } from './components/pages/dashboard/dashboard-wallet/dashboard-wallet.component';
import { DashboardReviewsComponent } from './components/pages/dashboard/dashboard-reviews/dashboard-reviews.component';
import { DashboardInvoiceComponent } from './components/pages/dashboard/dashboard-invoice/dashboard-invoice.component';
import { DashboardMyProfileComponent } from './components/pages/dashboard/dashboard-my-profile/dashboard-my-profile.component';
import { DashboardAddListingsComponent } from './components/pages/dashboard/dashboard-add-listings/dashboard-add-listings.component';
import { DashboardBookmarksComponent } from './components/pages/dashboard/dashboard-bookmarks/dashboard-bookmarks.component';
import { DashboardMyListingsComponent } from './components/pages/dashboard/dashboard-my-listings/dashboard-my-listings.component';
import { ProfileDetailComponent } from './components/pages/profile-detail/profile-detail.component';
import { NgStepperModule } from 'angular-ng-stepper';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FreeMemberComponent } from './components/pages/dashboard/member/free-member/free-member.component';
import { PremiumMemberComponent } from './components/pages/dashboard/member/premium-member/premium-member.component';
import { BulkMemberComponent } from './components/pages/dashboard/member/bulk-member/bulk-member.component';
import { DeletedMemberComponent } from './components/pages/dashboard/member/deleted-member/deleted-member.component';
import { ReportedMemberComponent } from './components/pages/dashboard/member/reported-member/reported-member.component';
import { StepperDemoComponent } from './components/pages/stepper-demo/stepper-demo.component';
import { ProfileTabsComponent } from './components/pages/profile-detail/profile-tabs/profile-tabs.component';
import { SimilarProfileComponent } from './components/pages/profile-detail/similar-profile/similar-profile.component';
import { ReligionsComponent } from './components/pages/dashboard/member/profile-attributes/religions/religions.component';
import { CasteComponent } from './components/pages/dashboard/member/profile-attributes/caste/caste.component';
import { SubcasteComponent } from './components/pages/dashboard/member/profile-attributes/subcaste/subcaste.component';
import { ProfileSectionComponent } from './components/pages/dashboard/member/profile-section/profile-section.component';
import { PrimiumPackageComponent } from './components/pages/dashboard/primium-package/primium-package.component';
import { PackagePaymentComponent } from './components/pages/dashboard/package-payment/package-payment.component';
import { HappyStoriesComponent } from './components/pages/dashboard/happy-stories/happy-stories.component';
import { CompleteProfileComponent } from './components/pages/complete-profile/complete-profile.component';
import { MatModule } from './mat/mat.module';
import { HttpClientModule } from '@angular/common/http';

//Import Services
import { UserService } from './user.service';
import { AdminService } from './admin.service';
import { NewsletterComponent } from './components/pages/dashboard/newsletter/newsletter.component';
import { SmsTemplateComponent } from './components/pages/dashboard/otp-system/sms-template/sms-template.component';
import { SetOtpComponent } from './components/pages/dashboard/otp-system/set-otp/set-otp.component';
import { SendSmsComponent } from './components/pages/dashboard/otp-system/send-sms/send-sms.component';
import { UploadedfileComponent } from './components/pages/dashboard/uploadedfile/uploadedfile.component';
import { UserInfoComponent } from './components/pages/user-info/user-info.component';
import { PhotoFileComponent } from './components/pages/photo-file/photo-file.component';
import { HeaderComponent } from './components/pages/dashboard/website-setup/header/header.component';
import { FooterComponent } from './components/pages/dashboard/website-setup/footer/footer.component';
import { PagesComponent } from './components/pages/dashboard/website-setup/pages/pages.component';
import { AppearanceComponent } from './components/pages/dashboard/website-setup/appearance/appearance.component';
import { MemberLanguageComponent } from './components/pages/dashboard/member/profile-attributes/member-language/member-language.component';
import { CountryComponent } from './components/pages/dashboard/member/profile-attributes/country/country.component';
import { StateComponent } from './components/pages/dashboard/member/profile-attributes/state/state.component';
import { CityComponent } from './components/pages/dashboard/member/profile-attributes/city/city.component';
import { OnBehalfComponent } from './components/pages/dashboard/member/profile-attributes/on-behalf/on-behalf.component';
import { FamilyValueComponent } from './components/pages/dashboard/member/profile-attributes/family-value/family-value.component';
import { FamilyStatusComponent } from './components/pages/dashboard/member/profile-attributes/family-status/family-status.component';
import { MaritalStatusesComponent } from './components/pages/dashboard/member/profile-attributes/marital-statuses/marital-statuses.component';
import { EducationComponent } from './components/pages/dashboard/member/profile-attributes/education/education.component';
import { OccupationComponent } from './components/pages/dashboard/member/profile-attributes/occupation/occupation.component';
import { StarComponent } from './components/pages/dashboard/member/profile-attributes/star/star.component';
import { MoonsignComponent } from './components/pages/dashboard/member/profile-attributes/moonsign/moonsign.component';
import { HightComponent } from './components/pages/dashboard/member/profile-attributes/hight/hight.component';
import { EmployedinComponent } from './components/pages/dashboard/member/profile-attributes/employedin/employedin.component';
import { ToastrModule } from 'ngx-toastr';
import { AddNewPageComponent } from './components/pages/dashboard/website-setup/pages/add-new-page/add-new-page.component';
import { GeneralSettingComponent } from './components/pages/dashboard/settings/general-setting/general-setting.component';
import { LanguageComponent } from './components/pages/dashboard/settings/language/language.component';
import { CurrencyComponent } from './components/pages/dashboard/settings/currency/currency.component';
import { PaymentMethodsComponent } from './components/pages/dashboard/settings/payment-methods/payment-methods.component';
import { SmtpSettingComponent } from './components/pages/dashboard/settings/smtp-setting/smtp-setting.component';
import { AddNewMemberComponent } from './components/pages/dashboard/member/free-member/add-new-member/add-new-member.component';
import { AddMemberComponent } from './components/pages/dashboard/member/premium-member/add-member/add-member.component';
import { AddNewPackageComponent } from './components/pages/dashboard/primium-package/add-new-package/add-new-package.component';
import { EmailTemplateComponent } from './components/pages/dashboard/settings/email-template/email-template.component';
import { ThirdPartySettingComponent } from './components/pages/dashboard/settings/third-party-setting/third-party-setting.component';
import { SocialLoginComponent } from './components/pages/dashboard/settings/social-login/social-login.component';
import { AllStaffComponent } from './components/pages/dashboard/staffs/all-staff/all-staff.component';
import { StaffRoleComponent } from './components/pages/dashboard/staffs/staff-role/staff-role.component';
import { AddNewStaffsComponent } from './components/pages/dashboard/staffs/all-staff/add-new-staffs/add-new-staffs.component';
import { AddNewRoleComponent } from './components/pages/dashboard/staffs/staff-role/add-new-role/add-new-role.component';
import { UpdateComponent } from './components/pages/dashboard/system/update/update.component';
import { ServerStatusComponent } from './components/pages/dashboard/system/server-status/server-status.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { LoginComponent } from './components/pages/login/login.component';
import { MyProfileComponent } from './components/pages/myprofile/myprofile.component';
import { MyprofileTabComponent } from './components/pages/myprofile/myprofile-tab/myprofile-tab.component';
import { VerifyProfileComponent } from './components/pages/dashboard/verify-profile/verify-profile.component';
import { VerifyMemberComponent } from './components/pages/dashboard/member/verify-member/verify-member.component';
import { UserProfileOneComponent } from './components/pages/user-profile-one/user-profile-one.component';
import { UserProfileTwoComponent } from './components/pages/user-profile-two/user-profile-two.component';
import { AllMemberComponent } from './components/pages/dashboard/member/all-member/all-member.component';
import { FeaturedMemberComponent } from './components/pages/dashboard/member/featured-member/featured-member.component';
import { PremuimPlanComponent } from './components/pages/premuim-plan/premuim-plan.component';
import { UserDashboardComponent } from './components/pages/user-dashboard/user-dashboard.component';
import { UserDashboardNavbarComponent } from './components/common/user-dashboard-navbar/user-dashboard-navbar.component';
import { UserDashboardSidemenuComponent } from './components/common/user-dashboard-sidemenu/user-dashboard-sidemenu.component';
import { ProfileContentComponent } from './components/pages/user-dashboard/profile-content/profile-content.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeDemoOneComponent,
    HomeDemoTwoComponent,
    AppDownloadComponent,
    HowItWorksComponent,
    HomeoneBlogComponent,
    FeedbackStyleOneComponent,
    HomeoneDestinationsComponent,
    CategoryComponent,
    HomeoneListingsComponent,
    FeaturesComponent,
    HomeoneBannerComponent,
    FooterStyleOneComponent,
    NavbarStyleOneComponent,
    NavbarStyleTwoComponent,
    HometwoBannerComponent,
    HometwoListingsComponent,
    HometwoDestinationsComponent,
    HometwoEventsComponent,
    HometwoBlogComponent,
    ComingSoonComponent,
    NotFoundComponent,
    AboutUsComponent,
    PartnerComponent,
    TeamComponent,
    FunfactsComponent,
    HowItWorksPageComponent,
    PricingComponent,
    GalleryComponent,
    FaqComponent,
    ContactComponent,
    FooterStyleTwoComponent,
    BlogGridComponent,
    BlogRightSidebarComponent,
    BlogDetailsComponent,
    ProductsListComponent,
    CartComponent,
    CheckoutComponent,
    ProductsDetailsComponent,
    RelatedProductsComponent,
    AuthorProfileComponent,
    CategoriesComponent,
    TopPlaceComponent,
    ListingsDetailsComponent,
    EventsDetailsComponent,
    EventsComponent,
    VerticalListingsLeftSidebarComponent,
    VerticalListingsRightSidebarComponent,
    VerticalListingsFullWidthComponent,
    GridListingsLeftSidebarComponent,
    GridListingsRightSidebarComponent,
    GridListingsFullWidthComponent,
    DashboardComponent,
    DashboardNavbarComponent,
    DashboardSidemenuComponent,
    CopyrightsComponent,
    StatsComponent,
    RecentActivitiesComponent,
    DashboardMessagesComponent,
    DashboardBookingsComponent,
    DashboardWalletComponent,
    DashboardReviewsComponent,
    DashboardInvoiceComponent,
    DashboardMyProfileComponent,
    DashboardAddListingsComponent,
    DashboardBookmarksComponent,
    DashboardMyListingsComponent,
    ProfileDetailComponent,
    FreeMemberComponent,
    PremiumMemberComponent,
    BulkMemberComponent,
    DeletedMemberComponent,
    ReportedMemberComponent,
    StepperDemoComponent,
    ProfileTabsComponent,
    SimilarProfileComponent,
    ReligionsComponent,
    CasteComponent,
    SubcasteComponent,
    ProfileSectionComponent,
    PrimiumPackageComponent,
    PackagePaymentComponent,
    HappyStoriesComponent,
    CompleteProfileComponent,
    NewsletterComponent,
    SmsTemplateComponent,
    SetOtpComponent,
    SendSmsComponent,
    UploadedfileComponent,
    UserInfoComponent,
    PhotoFileComponent,
    HeaderComponent,
    FooterComponent,
    PagesComponent,
    AppearanceComponent,
    MemberLanguageComponent,
    CountryComponent,
    StateComponent,
    CityComponent,
    OnBehalfComponent,
    FamilyValueComponent,
    FamilyStatusComponent,
    MaritalStatusesComponent,
    EducationComponent,
    OccupationComponent,
    StarComponent,
    MoonsignComponent,
    HightComponent,
    EmployedinComponent,
    AddNewPageComponent,
    GeneralSettingComponent,
    LanguageComponent,
    CurrencyComponent,
    PaymentMethodsComponent,
    SmtpSettingComponent,
    AddNewMemberComponent,
    AddMemberComponent,
    AddNewPackageComponent,
    EmailTemplateComponent,
    ThirdPartySettingComponent,
    SocialLoginComponent,
    AllStaffComponent,
    StaffRoleComponent,
    AddNewStaffsComponent,
    AddNewRoleComponent,
    UpdateComponent,
    ServerStatusComponent,
    SignupComponent,
    LoginComponent,
    MyProfileComponent,
    MyprofileTabComponent,
    VerifyProfileComponent,
    VerifyMemberComponent,
    UserProfileOneComponent,
    UserProfileTwoComponent,
    AllMemberComponent,
    FeaturedMemberComponent,
    PremuimPlanComponent,
    UserDashboardComponent,
    UserDashboardNavbarComponent,
    UserDashboardSidemenuComponent,
    ProfileContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    SelectDropDownModule,
    NgxTypedJsModule,
    FormsModule,
    NgxPaginationModule,
    NgStepperModule,
    CdkStepperModule,
    Ng2SmartTableModule,
    MatModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [UserService, AdminService],
  bootstrap: [AppComponent],
})
export class AppModule {}
