'use server';

import { redirect } from 'next/navigation';

export const checkoutAction = async () => {
  redirect('/?error=checkout-not-configured');
};

export const customerPortalAction = async () => {
  redirect('/?error=portal-not-configured');
};
