/*
 * @LastEditors: whitechiina 1293616053@qq.com
 * @LastEditTime: 2023-02-27 15:46:05
 */
import { onMounted,onUnmounted, ref } from 'vue'
import { throttle } from 'underscore'
export default function useScroll(elRef){
  let el = window
  const isReachBottom = ref(false)
  const clientHeight = ref(0)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)
 
  const scrollListenerHandler = throttle(() => {
    if(el === window){
      clientHeight.value =  document.documentElement.clientHeight
      scrollHeight.value = document.documentElement.scrollHeight
      scrollTop.value = document.documentElement.scrollTop
    }else {
      clientHeight.value = el.clientHeight
      scrollTop.value = el.scrollTop
      scrollHeight.value = el.scrollHeight
    }
    if(clientHeight.value + scrollTop.value >= scrollHeight.value){
      // homeStore.fetchHouselistData()
      isReachBottom.value = true
    }
  }, 100)
  
  onMounted(()=> {
    if(elRef) {
      el = elRef.value
    }
    el.addEventListener("scroll", scrollListenerHandler)
  })

  onUnmounted(()=>{
    el.removeEventListener("scroll", scrollListenerHandler)
  })
 
  return { isReachBottom, clientHeight, scrollTop, scrollHeight }
}