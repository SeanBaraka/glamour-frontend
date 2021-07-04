import { App } from "vue"
import PopTip from "@/components/alerts/PopTip.vue"

const PopTipAlert = {
    install (app: App, options: any ): any {
        app.component('pop-tip-alert', PopTip) // register the component for global usage
        app.config.globalProperties.$alert = {
            show (params: any): void {
                app.config.globalProperties.$bus.emit('show', params)
            }
        }
    }
}

export default PopTipAlert