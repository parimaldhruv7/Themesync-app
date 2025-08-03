import { Product } from '../types';

const API_BASE_URL = 'https://fakestoreapi.com';

class ApiService {
  private async fetchWithErrorHandling<T>(url: string): Promise<T> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('API fetch error:', error);
      throw error;
    }
  }

  async getProducts(): Promise<Product[]> {
    return this.fetchWithErrorHandling<Product[]>(`${API_BASE_URL}/products`);
  }

  async getProduct(id: number): Promise<Product> {
    return this.fetchWithErrorHandling<Product>(`${API_BASE_URL}/products/${id}`);
  }

  async getCategories(): Promise<string[]> {
    return this.fetchWithErrorHandling<string[]>(`${API_BASE_URL}/products/categories`);
  }
}

export const apiService = new ApiService();