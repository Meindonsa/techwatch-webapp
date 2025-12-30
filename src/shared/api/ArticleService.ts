import api from '@/shared/api/axiosInstance.ts'
import { Configuration, ArticleApi } from '@meindonsa/chat-api'
import type { AxiosResponse } from 'axios'
import type { PaginatedRequest } from '@meindonsa/chat-api/models'

const articleApi = new ArticleApi(new Configuration(), undefined, api)

export const ArticleService = {
  async retrieveArticles(req: any): Promise<AxiosResponse> {
    const request: PaginatedRequest = req
    return articleApi.retrieveArticles(request)
  },

  async retrieveArticle(fid: string): Promise<AxiosResponse> {
    return articleApi.retrieveArticle(fid);
  },
}
