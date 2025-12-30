import api from '@/shared/api/axiosInstance.ts'
import type { AxiosResponse } from 'axios'
import type { PaginatedRequest } from '@meindonsa/techwatch-api/models'
import { ArticleApi } from '@meindonsa/techwatch-api/api'
import { Configuration } from '@meindonsa/techwatch-api/configuration'

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
