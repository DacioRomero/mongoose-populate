import { Query, HookSyncCallback, HookNextFunction } from 'mongoose'

// https://stackoverflow.com/a/30052105/10336544
export function createPopulateHook<T extends Query<unknown>>(
  field: string
): HookSyncCallback<T> {
  return function populateHook(this: T, next: HookNextFunction): void {
    this.populate(field)
    next()
  }
}