import { createFileRoute } from '@tanstack/react-router'
import {button} from '@/styles/index.css'

export const Route = createFileRoute('/')({
  component: HomeComponent
})

function HomeComponent() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
        <button type="button" className={button}>BUTTON</button>
    </div>
  )
}
