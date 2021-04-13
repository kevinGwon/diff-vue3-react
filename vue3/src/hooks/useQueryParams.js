import { watchEffect, ref } from 'vue';
import { useRouter } from 'vue-router';

export const useQueryParams = () => {
  const router = useRouter();
  const queryString = window.location.href.split('?');
  const locationSearch = queryString.length ? queryString[1] : queryString[0];
  const params = ref(Object.fromEntries(new URLSearchParams(locationSearch)));

  watchEffect(() => {
    const queryParams = new URLSearchParams();

    for (const key of Object.keys(params.value)) {
      queryParams.append(key, params.value[key]);
      !params.value[key] && queryParams.delete(key);
    }

    router.push({
      query: {
        ...Object.fromEntries(new URLSearchParams(queryParams.toString())),
      }
    });
  });

  return { params };
};
