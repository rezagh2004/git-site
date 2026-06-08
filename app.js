const login=(user)=>{
    if(user.name==="reza"){
        return true
    }else{
        return false
    }
}

const register=(user)=>{
    return {user , token}
}

const getme=(token)=>{
    return user
}

const test=()=> false

const addCourse=(course)=>{
    return {
        message:"new course added successfully :))"
    }
}

const removeCourse=(courseID)=>{
    return {
        message:"course Removed successfully :))"
    }
}

const updateCourse=(course , courseID)=>{
    const isUpdated = true
    if (isUpdated) {
        return {
            success: true,
            data: { courseID, course },
            message: "Course updated successfully :))"
        };
    } else {
        return {
            success: false,
            message: "Failed to update course"
        }
    }
}

//Auth