import { Card } from "./ui/card"

const Footer = () => {
  return (
    <footer>
      <Card className="px-5 py-6">
        <p className="text-sm text-gray-400">
          © 2023 Copyright <span className="font-bold">FSW Barber</span>
        </p>
      </Card>
    </footer>
  )
}

export default Footer
