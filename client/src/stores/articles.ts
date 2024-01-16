import { defineStore } from 'pinia'
import { faker } from '@faker-js/faker';

export type Article = {
  title: string,
  id: number,
  image: string,
  author: string,
  date: Date,
  content: string,
  synopsis: string
}

const generateMockArticle = () => ({
  id: faker.number.int({ min: 1, max: 1_000_000_000 }),
  title: faker.lorem.sentence(),
  image: faker.image.avatar(),
  author: faker.person.fullName(),
  date: faker.date.past(),
  content: faker.lorem.paragraphs(),
  synopsis: faker.lorem.paragraph(),
})

export const useArticlesStore = defineStore('articles', () => {

  // keep internal! this acts similarly to a mongo collection
  const articles = Array.from({ length: 10_000 }, generateMockArticle)

  const getArticles = () => {
    return new Promise<Article[]>((resolve) => {
      setTimeout(() => resolve(articles), faker.number.int({ min: 500, max: 1_000 }))
    })
  }

  const getArticleByProp = <T extends keyof Article, K extends Article[T]>(prop: T, value: K) => {
    return new Promise<Article>((resolve, reject) => {
      setTimeout(() => {
        const article = articles.find(article => article[prop] === value)
        article ? resolve(article) : reject(new Error('ARTICLE_NOT_FOUND'))
      }, faker.number.int({ min: 500, max: 1_000 }))
    })
  }

  const getArticleById = (id: Article['id']) => getArticleByProp('id', id)

  return {
    getArticles,
    getArticleByProp,
    getArticleById,
  }
})