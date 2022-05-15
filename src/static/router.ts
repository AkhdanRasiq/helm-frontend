import CONFIG from "../static/config.json"
import CCNCoverView from "../views/CCNCoverView"


const router = [
  {
    "id": "coverView",
    "path": CONFIG.pages.endpoint.cover,
    "element": CCNCoverView
  },
  {
    "id": "questionView",
    "path": CONFIG.pages.endpoint.question,
    "element": CCNCoverView
  },
  {
    "id": "resultView",
    "path": CONFIG.pages.endpoint.result,
    "element": CCNCoverView
  }
]

export default router
