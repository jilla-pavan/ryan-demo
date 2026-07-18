import { Component } from 'react'

export default class CanvasErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch() {
    // Swallow silently — fallback UI covers the case, no console output.
  }

  render() {
    if (this.state.hasError) return this.props.fallback
    return this.props.children
  }
}
