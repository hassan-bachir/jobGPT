type CacheTag
export function getGlobalTag(tag) {
 return `global:${tag}` as const; 
}