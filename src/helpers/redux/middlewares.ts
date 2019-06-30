export const entityTypeToCommon = (state: any) => (next: any) => (action: any) => {
	return next({ ...action, type: action.type.split('_')[1] || action.type })
}
