declare namespace Models {
  interface IProject {
    title: string
    color: string
    skills: Array<{
      name: string
      icon: string
    }>
  }
}