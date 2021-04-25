import { watchEffect, reactive } from "vue";
import { useRouter } from "vue-router";

const useQueryParams = () => {
  const router = useRouter();
  const locationSearch = window.location.search.substring(1);
  const searchParams = new URLSearchParams(locationSearch);
  const params = reactive(Object.fromEntries(searchParams));

  watchEffect(() => {
    for (const key of Object.keys(params)) {
      const value = params[key];
      value ? searchParams.set(key, value) : searchParams.delete(key);
    }
    router.push({
      query: {
        ...Object.fromEntries(searchParams)
      }
    });
  });

  return params;
};

export default useQueryParams;