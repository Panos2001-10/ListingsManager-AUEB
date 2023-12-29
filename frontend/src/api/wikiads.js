const base_url = "https://wiki-ads.onrender.com";

async function getAllCategories()
{
    const response = await fetch(base_url + "/categories");
    const categories = await response.json();

    return categories;
}

async function getSubCategories(categoryId)
{
    const response = await fetch(base_url + "/categories/" + categoryId + "/subcategories");
    const subCategories = await response.json();

    return subCategories;
}

async function getSubcategoryAds(subcategoryID)
{
    const response = await fetch(base_url + "/ads?subcategory=" + subcategoryID);
    const ads = await response.json();
    
    return ads;
}