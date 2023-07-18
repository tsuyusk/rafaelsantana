declare namespace Models {
  interface IProject {
    title: string
    color: string
    image: string
    type: string
    link: string
    skills: Array<{
      name: string
      icon: string
    }>
  }
}