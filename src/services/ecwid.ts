const headers = new Headers({
  Accept: 'application/json',
  Authorization: `Bearer ${import.meta.env.VITE_ECWID_AUTH_TOKEN}`
})

export const getProducts = async (categoryId?: string): Promise<ProductsItem[]> => {
  const params = new URLSearchParams({
    ...(categoryId && { category: categoryId }),
    responseFields:
      'items(id,name,price,defaultDisplayedPriceFormatted,categoryIds,media(images(id,image400pxUrl,image800pxUrl,image1500pxUrl,isMain)))'
  }).toString()

  const request = new Request(`${import.meta.env.VITE_STORE_API_URL}/products?${params}`, {
    headers
  })

  const response = await fetch(request)
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data)
  }

  return data.items
}

export const getProductById = async (id: string | number): Promise<Product> => {
  const params = new URLSearchParams({
    responseFields:
      'id,name,description,price,defaultDisplayedPriceFormatted,media(images(id,image400pxUrl,image800pxUrl,image1500pxUrl))'
  }).toString()

  const request = new Request(`${import.meta.env.VITE_STORE_API_URL}/products/${id}?${params}`, {
    headers
  })

  const response = await fetch(request)
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data)
  }

  return data
}

export const getCategories = async (): Promise<CategoriesItem[]> => {
  const params = new URLSearchParams({
    //parentCategoryId: '0', this param doesn't seem to be working
    responseFields: 'items(id,name,thumbnailUrl,parentId)'
  }).toString()

  const request = new Request(`${import.meta.env.VITE_STORE_API_URL}/categories?${params}`, {
    headers
  })

  const response = await fetch(request)
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data)
  }

  return data.items
}

export interface ProductsItem {
  id: number
  name: string
  price: number
  categoryIds: number[]
  defaultDisplayedPriceFormatted: string
  media: {
    images: Array<{
      id: string
      image400pxUrl: string
      image800pxUrl: string
      image1500pxUrl: string
      isMain: boolean
    }>
  }
}

export interface Product extends ProductsItem {
  description: string
}

export interface CategoriesItem {
  id: number
  name: string
  parentId?: number
  thumbnailUrl: string
}
