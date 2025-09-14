// Simulate a background analytics/logging call which must not block initial render
export async function logPageView(): Promise<void> {
  // fake analytics delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  // In real case, send analytics event here
  // console.log('Page view logged!');
}
