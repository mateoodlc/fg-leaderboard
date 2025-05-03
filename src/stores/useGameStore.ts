import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { GameMemberType, MarketItemType } from '../types'

export const useGameStore = defineStore('game', () => {
  const MAIN_URL = 'https://api-game.bloque.app/game'
  const members = ref<GameMemberType[]>(JSON.parse(localStorage.getItem('members') || '[]'));
const marketItems = ref<MarketItemType[]>(JSON.parse(localStorage.getItem('market') || '[]'));

  const fetchMembers = async () => {
    try {
      const res = await fetch(`${MAIN_URL}/leaderboard`)
      const data = await res.json()
      members.value = data.players
      localStorage.setItem('members', JSON.stringify(data.players))
    }

    catch (error) {
      const cached = localStorage.getItem('members')
      if (cached) {
        members.value = JSON.parse(cached)
      }
    }
  }

  const fetchMarket = async () => {
    try {
      const res = await fetch(`${MAIN_URL}/market`)
      const data = await res.json()
      const uniqueItems = new Set();
      const filteredItems = data.items.filter((item: MarketItemType) => {
        if (uniqueItems.has(item.name)) return false;
        uniqueItems.add(item.name);
        return true;
      });
      marketItems.value = filteredItems
      localStorage.setItem('market', JSON.stringify(filteredItems))
    } catch (error) {
      const cached = localStorage.getItem('market')
      if (cached) {
        marketItems.value = JSON.parse(cached)
      }
    }
  }

  return {
    members,
    marketItems,
    fetchMembers,
    fetchMarket,
  }
})