/**延时方法**/
export function divineDelay(delay = 100, handler?: Function) {
	return new Promise(resolve => {
		const timeout = setTimeout(async () => {
			resolve(await handler?.())
			clearTimeout(timeout)
		}, delay)
	})
}
