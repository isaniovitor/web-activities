import { defineStore } from "pinia";
import api from "../services/api";
import { User, userStore } from "./user";

interface Attributes {
  title: string;
  description: string;
  image: any;
  latitude: string;
  longitude: string;
  status: boolean;
  users_permissions_user: {
    data: User;
  };
  users_liked: {
    data: any[];
  };
}

export interface Donation {
  id: number;
  attributes: Attributes;
}

interface State {
  userDonations: Donation[];
  donations: Donation[];
  userLiked: Donation[];
}

export const donationStore = defineStore("donation", {
  state: (): State => ({
    userDonations: [],
    donations: [],
    userLiked: [],
  }),

  getters: {
    currentDonations(state) {
      return state.donations;
    },
    currentUserDonations(state) {
      return state.userDonations;
    },
    currentUserLiked(state) {
      return state.userLiked;
    },
  },

  actions: {
    async getDonations(categorieID?: string) {
      const store = userStore();

      try {
        const donations = await api.get(
          categorieID
            ? "/donations?populate=*&filters[tag][id][$eq]=" + categorieID
            : "/donations?populate=*"
        );
        this.donations = donations.data.data;

        const userDonations = await api.get(
          "/donations?populate=*&filters[users_permissions_user][id][$eq]=" +
            store.user.id
        );
        this.userDonations = userDonations.data.data;

        const userLiked = await api.get(
          "/donations?populate=*&filters[users_liked][id][$in]=" + store.user.id
        );
        this.userLiked = userLiked.data.data;

        return true;
      } catch (error) {
        return false;
      }
    },
    async getDonation(id: number) {
      try {
        const { data } = await api.get(`/donations/${id}?populate=*`);
        return data.data;
      } catch (error) {
        return false;
      }
    },
    async create(donation: FormData) {
      try {
        const { data } = await api.post(`/donations/`, donation, {
          headers: {
            "Content-Type": "multipart/form-data",
            // eslint-disable-next-line prettier/prettier
            "Authorization": `Bearer ${localStorage.getItem("zFJqsz757BscGHsg")}`,
          },
        });
        return data.data;
      } catch (error) {
        return false;
      }
    },
    async delete(id: number) {
      try {
        await api.delete(`/donations/${id}`, {
          headers: {
            // eslint-disable-next-line prettier/prettier
            "Authorization": `Bearer ${localStorage.getItem("zFJqsz757BscGHsg")}`,
          },
        });
        return true;
      } catch (error) {
        return false;
      }
    },
    async update(donation: any, newPicture?: File) {
      const formData = new FormData();
      const { attributes, id } = donation;

      if (newPicture) {
        formData.append("files.image", newPicture, newPicture.name);
      }

      formData.append(
        "data",
        JSON.stringify({
          id: id,
          title: attributes.title,
          description: attributes.description,
          status: attributes.status,
          users_liked: attributes.users_liked.data,
          users_permissions_user: attributes.users_permissions_user.data,
          // image: newPicture && [],
        })
      );

      try {
        await api.put(`/donations/${donation.id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            // eslint-disable-next-line prettier/prettier
            "Authorization": `Bearer ${localStorage.getItem("zFJqsz757BscGHsg")}`,
          },
        });

        return true;
      } catch (error) {
        console.log(error);

        return false;
      }
    },
  },
});
