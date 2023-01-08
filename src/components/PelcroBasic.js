import React from "react";
import { usePelcro, PelcroModalController, Dashboard, DashboardOpenButton, SelectModal, LoginModal, RegisterModal, PaymentMethodUpdateModal, PaymentMethodSelectModal, SubscriptionCreateModal, SubscriptionRenewModal, NewsLetter, NewsletterUpdateModal, PaymentSuccessModal, MeterModal, UserUpdateModal, AddressCreateModal, AddressUpdateModal, PasswordResetModal, PasswordForgotModal, CartModal, ShopView, OrderConfirmModal, OrderCreateModal, GiftCreateModal, GiftRedeemModal, PasswordChangeModal, AddressSelectModal, ProfilePicChangeModal, Notification } from "@pelcro/react-pelcro-js";
import "@pelcro/react-pelcro-js/dist/pelcro.css";
export default function Main() {
	const {
		switchView
	} = usePelcro();
	return <>
		      
		<button onClick={() => switchView("login")}>
			Login
		</button>
		      
		<button onClick={() => switchView("dashboard")}>
			My dashboard
		</button>
		      
		<button onClick={() => switchView("plan-select")}>
			Subscribe
		</button>
		      
		<PelcroModalController>
			        
			<MeterModal />
			        
			<LoginModal />
			        
			<RegisterModal />
			        
			<UserUpdateModal />
			        
			<Dashboard />
			        
			<DashboardOpenButton />
			        
			<ProfilePicChangeModal />
			        
			<PasswordForgotModal />
			        
			<PasswordChangeModal />
			        
			<PasswordResetModal />
			        
			<PaymentMethodUpdateModal />
			        
			<PaymentMethodSelectModal />
			        
			<SelectModal />
			        
			<NewsLetter />
			        
			<NewsletterUpdateModal />
			        
			<AddressCreateModal />
			        
			<AddressSelectModal />
			        
			<AddressUpdateModal />
			        
			<SubscriptionCreateModal />
			        
			<SubscriptionRenewModal />
			        
			<PaymentSuccessModal />
			        
			<GiftCreateModal />
			        
			<GiftRedeemModal />
			        
			<ShopView />
			        
			<CartModal />
			        
			<OrderCreateModal />
			        
			<OrderConfirmModal />
			        
			<Notification />
			      
		</PelcroModalController>
		    
	</>;
}