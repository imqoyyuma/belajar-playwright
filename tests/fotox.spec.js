// @ts-check
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://fotoxai.aidentech.in/');
  await expect(page.getByRole('heading', { name: 'One upload transforms every' })).toBeVisible();
});