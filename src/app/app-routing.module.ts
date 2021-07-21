import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { AuthorProfileComponent } from './components/pages/author-profile/author-profile.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { BlogGridComponent } from './components/pages/blog-grid/blog-grid.component';
import { BlogRightSidebarComponent } from './components/pages/blog-right-sidebar/blog-right-sidebar.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CategoriesComponent } from './components/pages/categories/categories.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { CompleteProfileComponent } from './components/pages/complete-profile/complete-profile.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { DashboardAddListingsComponent } from './components/pages/dashboard/dashboard-add-listings/dashboard-add-listings.component';
import { DashboardBookingsComponent } from './components/pages/dashboard/dashboard-bookings/dashboard-bookings.component';
import { DashboardBookmarksComponent } from './components/pages/dashboard/dashboard-bookmarks/dashboard-bookmarks.component';
import { DashboardInvoiceComponent } from './components/pages/dashboard/dashboard-invoice/dashboard-invoice.component';
import { DashboardMessagesComponent } from './components/pages/dashboard/dashboard-messages/dashboard-messages.component';
import { DashboardMyListingsComponent } from './components/pages/dashboard/dashboard-my-listings/dashboard-my-listings.component';
import { DashboardMyProfileComponent } from './components/pages/dashboard/dashboard-my-profile/dashboard-my-profile.component';
import { DashboardReviewsComponent } from './components/pages/dashboard/dashboard-reviews/dashboard-reviews.component';
import { DashboardWalletComponent } from './components/pages/dashboard/dashboard-wallet/dashboard-wallet.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { HappyStoriesComponent } from './components/pages/dashboard/happy-stories/happy-stories.component';
import { BulkMemberComponent } from './components/pages/dashboard/member/bulk-member/bulk-member.component';
import { DeletedMemberComponent } from './components/pages/dashboard/member/deleted-member/deleted-member.component';
import { FreeMemberComponent } from './components/pages/dashboard/member/free-member/free-member.component';
import { PremiumMemberComponent } from './components/pages/dashboard/member/premium-member/premium-member.component';
import { CasteComponent } from './components/pages/dashboard/member/profile-attributes/caste/caste.component';
import { ReligionsComponent } from './components/pages/dashboard/member/profile-attributes/religions/religions.component';
import { SubcasteComponent } from './components/pages/dashboard/member/profile-attributes/subcaste/subcaste.component';
import { ProfileSectionComponent } from './components/pages/dashboard/member/profile-section/profile-section.component';
import { ReportedMemberComponent } from './components/pages/dashboard/member/reported-member/reported-member.component';
import { NewsletterComponent } from './components/pages/dashboard/newsletter/newsletter.component';
import { SendSmsComponent } from './components/pages/dashboard/otp-system/send-sms/send-sms.component';
import { SetOtpComponent } from './components/pages/dashboard/otp-system/set-otp/set-otp.component';
import { SmsTemplateComponent } from './components/pages/dashboard/otp-system/sms-template/sms-template.component';
import { PackagePaymentComponent } from './components/pages/dashboard/package-payment/package-payment.component';
import { PrimiumPackageComponent } from './components/pages/dashboard/primium-package/primium-package.component';
import { UploadedfileComponent } from './components/pages/dashboard/uploadedfile/uploadedfile.component';
import { EventsDetailsComponent } from './components/pages/events-details/events-details.component';
import { EventsComponent } from './components/pages/events/events.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { GridListingsFullWidthComponent } from './components/pages/grid-listings-full-width/grid-listings-full-width.component';
import { GridListingsLeftSidebarComponent } from './components/pages/grid-listings-left-sidebar/grid-listings-left-sidebar.component';
import { GridListingsRightSidebarComponent } from './components/pages/grid-listings-right-sidebar/grid-listings-right-sidebar.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { HowItWorksPageComponent } from './components/pages/how-it-works-page/how-it-works-page.component';
import { ListingsDetailsComponent } from './components/pages/listings-details/listings-details.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { ProductsDetailsComponent } from './components/pages/products-details/products-details.component';
import { ProductsListComponent } from './components/pages/products-list/products-list.component';
import { ProfileDetailComponent } from './components/pages/profile-detail/profile-detail.component';
import { ProfileTabsComponent } from './components/pages/profile-detail/profile-tabs/profile-tabs.component';
import { SimilarProfileComponent } from './components/pages/profile-detail/similar-profile/similar-profile.component';
import { StepperDemoComponent } from './components/pages/stepper-demo/stepper-demo.component';
import { TopPlaceComponent } from './components/pages/top-place/top-place.component';
import { UserInfoComponent } from './components/pages/user-info/user-info.component';
import { PhotoFileComponent } from './components/pages/photo-file/photo-file.component';
import { VerticalListingsFullWidthComponent } from './components/pages/vertical-listings-full-width/vertical-listings-full-width.component';
import { VerticalListingsLeftSidebarComponent } from './components/pages/vertical-listings-left-sidebar/vertical-listings-left-sidebar.component';
import { VerticalListingsRightSidebarComponent } from './components/pages/vertical-listings-right-sidebar/vertical-listings-right-sidebar.component';
import { HeaderComponent } from './components/pages/dashboard/website-setup/header/header.component';
import { FooterComponent } from './components/pages/dashboard/website-setup/footer/footer.component';
import { PagerComponent } from 'ng2-smart-table/lib/components/pager/pager.component';
import { PagesComponent } from './components/pages/dashboard/website-setup/pages/pages.component';
import { AppearanceComponent } from './components/pages/dashboard/website-setup/appearance/appearance.component';
import { UserGuard } from './user.guard'
import { MemberLanguageComponent } from './components/pages/dashboard/member/profile-attributes/member-language/member-language.component';
import { CityComponent } from './components/pages/dashboard/member/profile-attributes/city/city.component';
import { StateComponent } from './components/pages/dashboard/member/profile-attributes/state/state.component';
import { CountryComponent } from './components/pages/dashboard/member/profile-attributes/country/country.component';
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
import { AddNewPageComponent } from './components/pages/dashboard/website-setup/pages/add-new-page/add-new-page.component';
import { CurrencyComponent } from './components/pages/dashboard/settings/currency/currency.component';
import { GeneralSettingComponent } from './components/pages/dashboard/settings/general-setting/general-setting.component';
import { LanguageComponent } from './components/pages/dashboard/settings/language/language.component';
import { PaymentMethodsComponent } from './components/pages/dashboard/settings/payment-methods/payment-methods.component';
import { SmtpSettingComponent } from './components/pages/dashboard/settings/smtp-setting/smtp-setting.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { LoginComponent } from './components/pages/login/login.component';

const routes: Routes = [
    { path: '', component: HomeDemoOneComponent },
    { path: 'index-2', component: HomeDemoTwoComponent },
    { path: 'about', component: AboutUsComponent },
    { path: 'how-it-works', component: HowItWorksPageComponent },
    { path: 'pricing', component: PricingComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'coming-soon', component: ComingSoonComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'blog-grid', component: BlogGridComponent },
    { path: 'blog-right-sidebar', component: BlogRightSidebarComponent },
    { path: 'blog-details', component: BlogDetailsComponent },
    { path: 'products-list', component: ProductsListComponent },
    { path: 'cart', component: CartComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'single-products', component: ProductsDetailsComponent },
    { path: 'user-profile', component: AuthorProfileComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'destinations', component: TopPlaceComponent },
    { path: 'vertical-listings-left-sidebar', component: VerticalListingsLeftSidebarComponent },
    { path: 'vertical-listings-right-sidebar', canActivate: [UserGuard], component: VerticalListingsRightSidebarComponent },
    { path: 'vertical-listings-full-width', component: VerticalListingsFullWidthComponent },
    { path: 'grid-listings-left-sidebar', component: GridListingsLeftSidebarComponent },
    { path: 'grid-listings-right-sidebar', component: GridListingsRightSidebarComponent },
    { path: 'grid-listings-full-width', component: GridListingsFullWidthComponent },
    { path: 'single-listings', component: ListingsDetailsComponent },
    { path: 'events', component: EventsComponent },
    { path: 'single-events', component: EventsDetailsComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'dashboard-messages', component: DashboardMessagesComponent },
    { path: 'dashboard-bookings', component: DashboardBookingsComponent },
    { path: 'dashboard-wallet', component: DashboardWalletComponent },
    { path: 'dashboard-reviews', component: DashboardReviewsComponent },
    { path: 'dashboard-invoice', component: DashboardInvoiceComponent },
    { path: 'dashboard-my-profile', component: DashboardMyProfileComponent },
    { path: 'dashboard-add-listings', component: DashboardAddListingsComponent },
    { path: 'dashboard-bookmarks', component: DashboardBookmarksComponent },
    { path: 'dashboard-my-listings', component: DashboardMyListingsComponent },
    // Here add new pages component

    // new component
    { path: 'profile-detail/:id', component: ProfileDetailComponent },
    { path: 'member/free-member', component: FreeMemberComponent },
    { path: 'member/premium-member', component: PremiumMemberComponent },
    { path: 'member/bulk-member', component: BulkMemberComponent },
    { path: 'member/deleted-member', component: DeletedMemberComponent },
    { path: 'member/reported-member', component: ReportedMemberComponent },
    { path: 'stepper-demo', component: StepperDemoComponent },
    { path: 'profile-tabs', component: ProfileTabsComponent },
    { path: 'similar-profile', component: SimilarProfileComponent },
    { path: 'profile-attributes/religions', component: ReligionsComponent },
    { path: 'profile-attributes/caste', component: CasteComponent },
    { path: 'profile-attributes/subcaste', component: SubcasteComponent },
    { path: 'profile-attributes/member-language', component: MemberLanguageComponent },
    { path: 'profile-attributes/City', component: CityComponent },
    { path: 'profile-attributes/state', component: StateComponent },
    { path: 'profile-attributes/country', component: CountryComponent },
    { path: 'profile-attributes/on-behalf', component: OnBehalfComponent },
    { path: 'profile-attributes/family-value', component: FamilyValueComponent },
    { path: 'profile-attributes/family-status', component: FamilyStatusComponent },
    { path: 'profile-attributes/marital-statuses', component: MaritalStatusesComponent },
    { path: 'profile-attributes/education', component: EducationComponent },
    { path: 'profile-attributes/occupation', component: OccupationComponent },
    { path: 'profile-attributes/star', component: StarComponent },
    { path: 'profile-attributes/moonsign', component: MoonsignComponent },
    { path: 'profile-attributes/hight', component: HightComponent },
    { path: 'profile-attributes/employedin', component: EmployedinComponent },



    { path: 'premium-package', component: PrimiumPackageComponent },
    { path: 'member/profile-section', component: ProfileSectionComponent },
    { path: 'package-payment', component: PackagePaymentComponent },
    { path: 'happy-stories', component: HappyStoriesComponent },
    { path: 'complete-profile', component: CompleteProfileComponent },
    { path: 'newsletter', component: NewsletterComponent },
    { path: 'sms-template', component: SmsTemplateComponent },
    { path: 'set-otp', component: SetOtpComponent },
    { path: 'send-sms', component: SendSmsComponent },
    { path: 'uploadedfile', component: UploadedfileComponent },
    { path: 'user-info', component: UserInfoComponent },
    { path: 'photo-file', component: PhotoFileComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent},

    // website setup
    { path: 'website-setup/header', component: HeaderComponent},
    { path: 'website-setup/footer', component: FooterComponent},
    { path: 'website-setup/pages', component: PagesComponent},
    { path: 'website-setup/appearance', component: AppearanceComponent},
    { path: 'website-setup/pages/add-new-page', component: AddNewPageComponent},

    // setting
    { path: 'settings/currency', component: CurrencyComponent},
    { path: 'settings/general-setting', component: GeneralSettingComponent},
    { path: 'settings/language', component: LanguageComponent},
    { path: 'settings/payment-methods', component: PaymentMethodsComponent},
    { path: 'settings/payment-methods', component: PaymentMethodsComponent},
    { path: 'settings/smtp-setting', component: SmtpSettingComponent},





    { path: '**', component: NotFoundComponent } // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
